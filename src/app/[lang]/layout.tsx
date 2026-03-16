import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Lang, isLang } from '@/lib/i18n';

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();

  return (
    <>
      <Header lang={params.lang as Lang} />
      {children}
      <Footer />
    </>
  );
}
