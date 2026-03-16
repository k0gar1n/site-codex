import Link from 'next/link';
import { dict } from '@/lib/dictionary';
import { languageLabels, languages, Lang } from '@/lib/i18n';

export function Header({ lang }: { lang: Lang }) {
  const nav = dict[lang].nav;
  const links = [
    ['/', nav.home],
    ['/about', nav.about],
    ['/projects', nav.projects],
    ['/services', nav.services],
    ['/attractions', nav.attractions],
    ['/led-screen', nav.led],
    ['/partners', nav.partners],
    ['/contact', nav.contact]
  ] as const;

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link href={`/${lang}`} className="logo" aria-label="MTÜ Noorteaeg">
          MTÜ <span className="accent">Noorteaeg</span>
        </Link>
        <nav className="nav-links">
          {links.map(([href, label]) => (
            <Link key={href} href={`/${lang}${href}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="lang-switch">
          {languages.map((item) => (
            <Link key={item} href={`/${item}`}>{languageLabels[item]}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}
