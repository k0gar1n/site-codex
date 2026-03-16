import { notFound } from 'next/navigation';
import { isLang } from '@/lib/i18n';
import { partners } from '@/lib/content';

export default function PartnersPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  return (
    <main className="section container">
      <h1>Partners</h1>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {partners.map((partner) => <div key={partner} className="card" style={{ padding: '1rem' }}>{partner}</div>)}
      </div>
    </main>
  );
}
