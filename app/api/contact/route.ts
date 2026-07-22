import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isValidEmail } from "@/lib/utils";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

// Extremely small in-memory rate limiter (per server instance).
// Prevents obvious spam bursts; not a substitute for a real rate limiter in production.
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || !isValidEmail(email) || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "adithya1756@gmail.com";

    // ---- Option A: Resend ----
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
          to: toEmail,
          reply_to: email,
          subject: `Portfolio contact — ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Resend error:", detail);
        return NextResponse.json(
          { error: "Failed to send message. Please try emailing directly." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // ---- Option B: SMTP via Nodemailer ----
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: toEmail,
        replyTo: email,
        subject: `Portfolio contact — ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });

      return NextResponse.json({ success: true });
    }

    // ---- No email provider configured ----
    console.warn(
      "No email provider configured. Set RESEND_API_KEY or SMTP_* env vars. Message logged below:"
    );
    console.log({ name, email, message });

    return NextResponse.json(
      {
        error:
          "Email delivery isn't configured yet on the server. Your message was logged — please reach out directly in the meantime.",
      },
      { status: 501 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
