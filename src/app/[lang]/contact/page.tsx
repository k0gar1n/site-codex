'use client';
import { FormEvent, useState } from 'react';
import { isLang } from '@/lib/i18n';

export default function ContactPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return <main className="section container">Invalid language.</main>;
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    });
    setSent(true);
  }

  return (
    <main className="section container">
      <h1>Contact</h1>
      <p><strong>Phone:</strong> +372 0000 0000</p>
      <p><strong>Email:</strong> info@noorteaeg.ee</p>
      <p><strong>Address:</strong> Ida-Virumaa, Estonia</p>
      <p><strong>Social:</strong> Facebook / Instagram placeholders</p>
      <form className="form" onSubmit={submit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" rows={5} placeholder="Message" required />
        <button type="submit" className="btn">Send message</button>
      </form>
      {sent && <p>Message sent.</p>}
    </main>
  );
}
