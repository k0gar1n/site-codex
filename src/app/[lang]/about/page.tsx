import { notFound } from 'next/navigation';
import { isLang } from '@/lib/i18n';

export default function AboutPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  return (
    <main className="section container">
      <h1>About MTÜ Noorteaeg</h1>
      <p className="muted">MTÜ Noorteaeg is a youth-focused organization in Ida-Virumaa promoting inclusion, regional vitality and practical opportunities for young people through projects, events and partnerships.</p>
    </main>
  );
}
