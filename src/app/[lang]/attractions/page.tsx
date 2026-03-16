import Link from 'next/link';
import { notFound } from 'next/navigation';
import { attractions } from '@/lib/content';
import { isLang, localize } from '@/lib/i18n';

export default function AttractionsPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  return (
    <main className="section container">
      <h1>Attractions</h1>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {attractions.map((item) => (
          <article className="card" key={item.slug}>
            <img src={item.image} alt={localize(item.name, params.lang)} style={{ aspectRatio: '16 / 9', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{localize(item.name, params.lang)}</h3>
              <p><strong>Price from €{item.priceFrom}</strong></p>
              <p className="muted">{localize(item.short, params.lang)}</p>
              <Link className="btn" href={`/${params.lang}/attractions/${item.slug}`}>Request booking</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
