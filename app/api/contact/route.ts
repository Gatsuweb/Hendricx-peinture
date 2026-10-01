import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact";
import type { ContactResponse } from "@/lib/contact-response";

const contactEmail = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<ContactResponse>(
      { status: "error", reason: "validation" },
      { status: 400 },
    );
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json<ContactResponse>(
      { status: "error", reason: "validation" },
      { status: 400 },
    );
  }

  if (clean(payload.website)) {
    return NextResponse.json<ContactResponse>({ status: "blocked" });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json<ContactResponse>(
      { status: "error", reason: "validation" },
      { status: 400 },
    );
  }

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json<ContactResponse>(
      { status: "error", reason: "technical" },
      { status: 500 },
    );
  }

  const subject = `Demande de devis peinture - ${name}`;
  const text = [
    `Nom: ${name}`,
    `Email: ${email}`,
    `Telephone: ${phone || "Non renseigne"}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
      <h1 style="font-size: 20px;">Nouvelle demande de devis</h1>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Telephone :</strong> ${escapeHtml(phone || "Non renseigne")}</p>
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      return NextResponse.json<ContactResponse>(
        { status: "error", reason: "technical" },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json<ContactResponse>(
      { status: "error", reason: "technical" },
      { status: 502 },
    );
  }

  return NextResponse.json<ContactResponse>({ status: "accepted" });
}
