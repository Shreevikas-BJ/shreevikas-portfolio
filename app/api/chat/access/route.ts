import { NextResponse } from "next/server";
import { siteConfig } from "@/data/portfolio";

const notificationEmail =
  process.env.CHATBOT_NOTIFICATION_EMAIL || siteConfig.notificationEmail;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function notifyWithResend(email: string, request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { attempted: false, ok: false, channel: "resend" };

  const timestamp = new Date().toISOString();
  const userAgent = request.headers.get("user-agent") || "Unknown";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio Assistant <onboarding@resend.dev>",
      to: [notificationEmail],
      subject: "New portfolio chatbot access",
      text: `A visitor unlocked Shreevikas's portfolio chatbot.\n\nEmail: ${email}\nTime: ${timestamp}\nUser agent: ${userAgent}`,
      html: `
        <h2>New portfolio chatbot access</h2>
        <p>A visitor unlocked Shreevikas's portfolio chatbot.</p>
        <table>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Time</strong></td><td>${timestamp}</td></tr>
          <tr><td><strong>User agent</strong></td><td>${userAgent}</td></tr>
        </table>
      `
    })
  }).finally(() => clearTimeout(timeout));

  return {
    attempted: true,
    ok: response.ok,
    channel: "resend"
  };
}

async function notifyWithFormSubmit(email: string, request: Request) {
  const timestamp = new Date().toISOString();
  const userAgent = request.headers.get("user-agent") || "Unknown";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(notificationEmail)}`,
    {
      method: "POST",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        _subject: "New portfolio chatbot access",
        _template: "table",
        _captcha: "false",
        message: `A visitor unlocked Shreevikas's portfolio chatbot.\n\nEmail: ${email}\nTime: ${timestamp}\nUser agent: ${userAgent}`
      })
    }
  ).finally(() => clearTimeout(timeout));

  return {
    attempted: true,
    ok: response.ok,
    channel: "formsubmit"
  };
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };
    const normalizedEmail = String(email || "").trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    let result = await notifyWithResend(normalizedEmail, request);
    if (!result.attempted) {
      result = await notifyWithFormSubmit(normalizedEmail, request);
    }

    return NextResponse.json({
      ok: true,
      notified: result.ok,
      channel: result.channel,
      to: notificationEmail
    });
  } catch {
    return NextResponse.json({
      ok: true,
      notified: false,
      channel: "none",
      to: notificationEmail
    });
  }
}
