import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  email?: string;
  message?: string;
};

const smtpUser = process.env.GMAIL_SMTP_USER;
const smtpPassword = process.env.GMAIL_SMTP_APP_PASSWORD;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  if (!smtpUser || !smtpPassword) {
    return NextResponse.json(
      {
        error:
          "SMTP credentials are not configured. Set GMAIL_SMTP_USER and GMAIL_SMTP_APP_PASSWORD environment variables.",
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!email || !message) {
    return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Obour STEM School" <${smtpUser}>`,
      to: `<${smtpUser}>`,
      replyTo: email,
      subject: "New contact form submission",
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(
        message
      ).replace(/\n/g, "<br/>")}</p>`,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
