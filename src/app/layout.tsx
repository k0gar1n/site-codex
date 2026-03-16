import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://noorteaeg.ee'),
  title: 'MTÜ Noorteaeg',
  description: 'Youth NGO in Ida-Virumaa focused on community initiatives and regional development.',
  openGraph: {
    title: 'MTÜ Noorteaeg',
    description: 'Youth NGO projects, events and services in Estonia',
    type: 'website'
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MTÜ Noorteaeg',
    url: 'https://noorteaeg.ee',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EE',
      addressRegion: 'Ida-Virumaa'
    },
    sameAs: ['https://facebook.com/noorteaeg', 'https://instagram.com/noorteaeg']
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        {children}
      </body>
    </html>
  );
}
