import { notFound } from 'next/navigation';
import { isLang } from '@/lib/i18n';

export default function EventDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) notFound();
  return (
    <main className="section container">
      <h1>Sample Community Day</h1>
      <p><strong>Date:</strong> 2025-06-15</p>
      <p><strong>Location:</strong> Narva</p>
      <p className="muted">Event page structure supports title, date, description, gallery, related project and location from CMS.</p>
      <p><strong>Related project:</strong> Youth Lab in Ida-Virumaa</p>
    </main>
  );
}
