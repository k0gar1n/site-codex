'use client';
import { FormEvent, useState } from 'react';
import { isLang } from '@/lib/i18n';

export default function LedScreenPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return <main className="section container">Invalid language.</main>;
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...Object.fromEntries(formData), service: 'mobile-led-screen' })
    });
    setSent(true);
  }

  return (
    <main className="section container">
      <h1>Mobile LED Screen</h1>
      <p className="muted">Professional LED screen rental for festivals, municipal campaigns and public events.</p>
      <p><strong>Technical specs:</strong> High-brightness outdoor panel, modular stage mount, live video support.</p>
      <p><strong>Use cases:</strong> Concerts, city events, sports broadcasts and social campaigns.</p>
      <p><strong>Example events:</strong> Community festivals and regional forums.</p>
      <p><strong>Photos:</strong> CMS gallery placeholder.</p>
      <h2>FAQ</h2>
      <p><strong>How fast can setup happen?</strong> Usually within 2-3 hours after site access.</p>
      <h2>Booking form</h2>
      <form className="form" onSubmit={submit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" rows={4} placeholder="Event goals and technical info" required />
        <button className="btn" type="submit">Request booking</button>
      </form>
      {sent && <p>Request sent.</p>}
    </main>
  );
}
