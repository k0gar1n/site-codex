import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(5) });

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO_EMAIL) {
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: false, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transporter.sendMail({ from: SMTP_USER, to: CONTACT_TO_EMAIL, subject: `Contact: ${parsed.data.name}`, text: `${parsed.data.email}\n\n${parsed.data.message}` });
  }

  return NextResponse.json({ ok: true });
}
