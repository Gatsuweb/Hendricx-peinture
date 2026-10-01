import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import ts from "typescript";

function compile(path) {
  return ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
}

const routeCode = compile("app/api/contact/route.ts");
const trackingCode = compile("lib/tracking.ts");
const payload = { name: "Test", email: "test@example.com", message: "Test" };

function routeWith(provider) {
  const compiledModule = { exports: {} };
  let calls = 0;
  const requireMock = (id) => {
    if (id === "next/server") {
      return {
        NextResponse: {
          json(body, options) {
            return { body, statusCode: options?.status ?? 200 };
          },
        },
      };
    }
    if (id === "@/lib/contact") return { CONTACT_EMAIL: "test@example.com" };
    throw new Error(`Unexpected import: ${id}`);
  };
  const processMock = {
    env: {
      RESEND_API_KEY: "test-key",
      CONTACT_FROM_EMAIL: "sender@example.com",
      CONTACT_TO_EMAIL: "recipient@example.com",
    },
  };
  new Function("require", "module", "exports", "process", "fetch", routeCode)(
    requireMock,
    compiledModule,
    compiledModule.exports,
    processMock,
    async () => {
      calls += 1;
      return provider();
    },
  );
  return {
    post: (body) => compiledModule.exports.POST({ json: async () => body }),
    providerCalls: () => calls,
  };
}

test("honeypot is blocked and never calls the email provider", async () => {
  const route = routeWith(() => ({ ok: true }));
  const result = await route.post({ ...payload, website: "robot" });
  assert.deepEqual(result, { body: { status: "blocked" }, statusCode: 200 });
  assert.equal(route.providerCalls(), 0);
});

test("invalid request is not accepted", async () => {
  const route = routeWith(() => ({ ok: true }));
  const result = await route.post({ ...payload, message: "" });
  assert.deepEqual(result, {
    body: { status: "error", reason: "validation" },
    statusCode: 400,
  });
  assert.equal(route.providerCalls(), 0);
});

test("only provider acceptance returns accepted", async () => {
  const accepted = routeWith(() => ({ ok: true }));
  assert.deepEqual(await accepted.post(payload), {
    body: { status: "accepted" },
    statusCode: 200,
  });
  const rejected = routeWith(() => ({ ok: false }));
  assert.deepEqual(await rejected.post(payload), {
    body: { status: "error", reason: "technical" },
    statusCode: 502,
  });
  const broken = routeWith(() => { throw new Error("offline"); });
  assert.deepEqual(await broken.post(payload), {
    body: { status: "error", reason: "technical" },
    statusCode: 502,
  });
});

test("tracking carries no personal data and old events are not replayed", () => {
  const compiledModule = { exports: {} };
  const windowMock = { dataLayer: [] };
  new Function("module", "exports", "window", trackingCode)(
    compiledModule,
    compiledModule.exports,
    windowMock,
  );
  compiledModule.exports.trackAcceptedLead();
  assert.deepEqual(windowMock.dataLayer, [
    { event: "generate_lead", lead_type: "contact_form" },
  ]);
  compiledModule.exports.discardUnsentTrackingEvents();
  assert.deepEqual(windowMock.dataLayer, []);
});
