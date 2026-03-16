import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const payload = await request.json();
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO_EMAIL } = process.env;

  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && BOOKING_TO_EMAIL) {
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: false, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transporter.sendMail({
      from: SMTP_USER,
      to: BOOKING_TO_EMAIL,
      subject: `Booking request: ${payload.service ?? payload.name}`,
      text: JSON.stringify(payload, null, 2)
    });
  }

  return NextResponse.json({ ok: true });
}
