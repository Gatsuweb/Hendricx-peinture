import { NextResponse } from "next/server";

const contactEmail = process.env.CONTACT_TO_EMAIL ?? "n.hendricx@laposte.net";
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
  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email and message are required." },
      { status: 400 },
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
    return NextResponse.json(
      { message: "Email could not be sent." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
