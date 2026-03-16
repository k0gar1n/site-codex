import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/content';
import { isLang, localize } from '@/lib/i18n';

export default function ProjectDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) notFound();
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="section container">
      <h1>{localize(project.title, params.lang)}</h1>
      <img src={project.image} alt="" style={{ borderRadius: 12, marginBottom: '1rem' }} />
      <p className="muted">{localize(project.description, params.lang)}</p>
      <p><strong>Goals:</strong> {localize(project.goals, params.lang)}</p>
      <p><strong>Timeline:</strong> {localize(project.timeline, params.lang)}</p>
      <p><strong>Location:</strong> {localize(project.location, params.lang)}</p>
      <p><strong>Partners:</strong> {project.partners.join(', ')}</p>
      <p><strong>Impact:</strong> {localize(project.impact, params.lang)}</p>
      <p><strong>Events:</strong> <Link href={`/${params.lang}/events/sample-community-day`}>Sample Community Day</Link></p>
      <p><strong>Gallery:</strong> Placeholder gallery integrated via CMS media array.</p>
      <p><strong>Media coverage:</strong> Optional links can be attached in CMS.</p>
      <Link className="btn secondary" href={`/${params.lang}/projects`}>Back to projects</Link>
    </main>
  );
}
