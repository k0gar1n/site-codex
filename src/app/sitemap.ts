import type { MetadataRoute } from 'next';
import { languages } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://noorteaeg.ee';
  const pages = ['', '/about', '/projects', '/services', '/attractions', '/led-screen', '/partners', '/contact'];

  return languages.flatMap((lang) => pages.map((page) => ({ url: `${base}/${lang}${page}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: page === '' ? 1 : 0.7 })));
}
