import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLang } from '@/lib/i18n';

export default function ServicesPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  return (
    <main className="section container">
      <h1>Services</h1>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <article className="card" style={{ padding: '1rem' }}>
          <h3>Children Attractions</h3>
          <p className="muted">Family and youth event attraction rentals.</p>
          <Link className="btn secondary" href={`/${params.lang}/attractions`}>Open attractions</Link>
        </article>
        <article className="card" style={{ padding: '1rem' }}>
          <h3>Mobile LED Screen</h3>
          <p className="muted">Professional outdoor LED screen rental for events.</p>
          <Link className="btn secondary" href={`/${params.lang}/led-screen`}>Open LED page</Link>
        </article>
      </div>
    </main>
  );
}
