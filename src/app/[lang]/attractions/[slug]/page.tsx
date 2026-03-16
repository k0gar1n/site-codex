'use client';
import { FormEvent, useState } from 'react';
import { attractions } from '@/lib/content';
import { isLang, localize } from '@/lib/i18n';

export default function AttractionDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) return <main className="section container">Invalid language.</main>;
  const item = attractions.find((a) => a.slug === params.slug);
  const [sent, setSent] = useState(false);
  if (!item) return <main className="section container">Attraction not found.</main>;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    });
    setSent(true);
  }

  return (
    <main className="section container">
      <h1>{localize(item.name, params.lang)}</h1>
      <p className="muted">{localize(item.description, params.lang)}</p>
      <p><strong>Technical requirements:</strong> {localize(item.technical, params.lang)}</p>
      <p><strong>Age recommendation:</strong> {localize(item.age, params.lang)}</p>
      <p><strong>Setup requirements:</strong> {localize(item.setup, params.lang)}</p>
      <p><strong>Gallery:</strong> CMS gallery placeholder.</p>
      <h2>Booking form</h2>
      <form className="form" onSubmit={submit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="date" type="date" required />
        <textarea name="message" placeholder="Event details" rows={4} required />
        <button className="btn" type="submit">Send booking request</button>
      </form>
      {sent && <p>Booking request sent.</p>}
    </main>
  );
}
