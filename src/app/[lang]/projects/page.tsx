import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/content';
import { isLang, localize } from '@/lib/i18n';

export default function ProjectsPage({ params, searchParams }: { params: { lang: string }; searchParams: { year?: string } }) {
  if (!isLang(params.lang)) notFound();
  const filtered = searchParams.year ? projects.filter((p) => p.year === Number(searchParams.year)) : projects;

  return (
    <main className="section container">
      <h1>Projects</h1>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {filtered.map((project) => (
          <article className="card" key={project.slug}>
            <img src={project.image} alt="" style={{ aspectRatio: '16 / 9', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{localize(project.title, params.lang)}</h3>
              <p className="muted">{localize(project.excerpt, params.lang)}</p>
              <Link className="btn secondary" href={`/${params.lang}/projects/${project.slug}`}>Read more</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
