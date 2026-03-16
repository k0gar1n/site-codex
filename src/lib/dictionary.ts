import { Lang } from './i18n';

type Dict = {
  nav: Record<string, string>;
  home: {
    heroTitle: string;
    heroText: string;
    missionCta: string;
    projectsTitle: string;
    activitiesTitle: string;
    servicesTitle: string;
    partnersTitle: string;
    contactCta: string;
  };
};

export const dict: Record<Lang, Dict> = {
  et: {
    nav: { home: 'Avaleht', about: 'Meist', projects: 'Projektid', services: 'Teenused', attractions: 'Atraktsioonid', led: 'Mobiilne LED-ekraan', partners: 'Partnerid', contact: 'Kontakt' },
    home: {
      heroTitle: 'MTÜ Noorteaeg arendab noorte võimalusi Ida-Virumaal',
      heroText: 'Toetame noorte osalust, loome kogukondlikke algatusi ja viime ellu projekte, mis tugevdavad piirkondlikku arengut.',
      missionCta: 'Loe lähemalt',
      projectsTitle: 'Meie projektid',
      activitiesTitle: 'Meie tegevused',
      servicesTitle: 'Teenused',
      partnersTitle: 'Partnerid',
      contactCta: 'Võta ühendust ja loo meiega järgmine algatus'
    }
  },
  ru: {
    nav: { home: 'Главная', about: 'О нас', projects: 'Проекты', services: 'Услуги', attractions: 'Аттракционы', led: 'Мобильный LED экран', partners: 'Партнеры', contact: 'Контакты' },
    home: {
      heroTitle: 'MTÜ Noorteaeg развивает возможности молодежи в Ида-Вирумаа',
      heroText: 'Мы поддерживаем участие молодежи, развиваем инициативы и реализуем проекты для регионального развития.',
      missionCta: 'Подробнее',
      projectsTitle: 'Наши проекты',
      activitiesTitle: 'Наша деятельность',
      servicesTitle: 'Услуги',
      partnersTitle: 'Партнеры',
      contactCta: 'Свяжитесь с нами и создайте следующую инициативу вместе с нами'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About Us', projects: 'Projects', services: 'Services', attractions: 'Attractions', led: 'Mobile LED Screen', partners: 'Partners', contact: 'Contact' },
    home: {
      heroTitle: 'MTÜ Noorteaeg empowers youth in Ida-Virumaa',
      heroText: 'We build youth participation, community initiatives and regional development through practical projects and partnerships.',
      missionCta: 'Learn more',
      projectsTitle: 'Our Projects',
      activitiesTitle: 'Our Activities',
      servicesTitle: 'Services',
      partnersTitle: 'Partners',
      contactCta: 'Collaborate with us, join a project or request a service'
    }
  }
};
