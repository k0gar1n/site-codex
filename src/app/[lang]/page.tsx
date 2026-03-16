import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { attractions, partners, projects } from '@/lib/content';
import { dict } from '@/lib/dictionary';
import { Lang, isLang, localize } from '@/lib/i18n';

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const t = dict[lang].home;

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <Link className="btn" href={`/${lang}/about`}>{t.missionCta}</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>MTÜ Noorteaeg</h2>
          <p className="muted">We are a youth NGO focused on engagement, regional development and sustainable community impact in Ida-Virumaa.</p>
          <Link className="btn secondary" href={`/${lang}/about`}>{t.missionCta}</Link>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>{t.projectsTitle}</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {projects.map((project) => <ProjectCard key={project.slug} project={project} lang={lang} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.activitiesTitle}</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {['Youth meetings', 'Community events', 'Environmental initiatives', 'Cultural programs'].map((item) => (
              <div className="card" key={item} style={{ padding: '1rem' }}><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.servicesTitle}</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {attractions.map((a) => (
              <article className="card" key={a.slug} style={{ padding: '1rem' }}>
                <h3>{localize(a.name, lang)}</h3>
                <p className="muted">{localize(a.short, lang)}</p>
                <Link className="btn secondary" href={`/${lang}/attractions/${a.slug}`}>Children Attractions</Link>
              </article>
            ))}
            <article className="card" style={{ padding: '1rem' }}>
              <h3>Mobile LED Screen</h3>
              <p className="muted">High-visibility screen rental for events and campaigns.</p>
              <Link className="btn secondary" href={`/${lang}/led-screen`}>Mobile LED Screen</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>{t.partnersTitle}</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {partners.map((partner) => <div className="card" style={{ padding: '1rem' }} key={partner}>{partner}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.contactCta}</h2>
          <Link className="btn" href={`/${lang}/contact`}>Contact</Link>
        </div>
      </section>
    </main>
  );
}
