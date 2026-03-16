import Link from 'next/link';
import { Lang, localize } from '@/lib/i18n';
import { Project } from '@/lib/content';

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <article className="card">
      <img src={project.image} alt={localize(project.title, lang)} style={{ aspectRatio: '16 / 9', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3>{localize(project.title, lang)}</h3>
        <p className="muted">{localize(project.excerpt, lang)}</p>
        <Link className="btn secondary" href={`/${lang}/projects/${project.slug}`}>Read more</Link>
      </div>
    </article>
  );
}
