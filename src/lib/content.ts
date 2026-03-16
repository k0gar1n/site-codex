import { Lang } from './i18n';

type LString = Record<Lang, string>;

export type Project = {
  slug: string;
  year: number;
  title: LString;
  excerpt: LString;
  description: LString;
  goals: LString;
  timeline: LString;
  location: LString;
  partners: string[];
  impact: LString;
  image: string;
};

export type Attraction = {
  slug: string;
  name: LString;
  priceFrom: number;
  short: LString;
  description: LString;
  age: LString;
  setup: LString;
  technical: LString;
  image: string;
};

export const projects: Project[] = [
  {
    slug: 'youth-lab-ida-virumaa',
    year: 2025,
    title: { et: 'Noortelabor Ida-Virumaal', ru: 'Молодежная лаборатория Ида-Вирумаа', en: 'Youth Lab in Ida-Virumaa' },
    excerpt: { et: 'Kohtumised noortele ideede arendamiseks.', ru: 'Встречи для развития молодежных идей.', en: 'Workshops for youth-driven ideas and leadership.' },
    description: { et: 'Programm toetab noorte ettevõtlikkust, koostööd ja sotsiaalset aktiivsust.', ru: 'Программа развивает предпринимательские и гражданские навыки молодежи.', en: 'A regional program supporting entrepreneurship, collaboration and civic participation among young people.' },
    goals: { et: 'Arendada noorte oskusi ja algatusvõimet.', ru: 'Развить навыки и инициативность молодежи.', en: 'Develop youth skills and initiative capacity.' },
    timeline: { et: 'Märts 2025 – Detsember 2025', ru: 'Март 2025 – Декабрь 2025', en: 'March 2025 – December 2025' },
    location: { et: 'Narva, Kohtla-Järve, Jõhvi', ru: 'Нарва, Кохтла-Ярве, Йыхви', en: 'Narva, Kohtla-Järve, Jõhvi' },
    partners: ['Kohalikud omavalitsused', 'Noortekeskused'],
    impact: { et: '120 noort osalejat ja 18 kogukonnaalgatust.', ru: '120 участников и 18 общественных инициатив.', en: '120 participants and 18 local initiatives launched.' },
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80'
  }
];

export const attractions: Attraction[] = [
  {
    slug: 'inflatable-obstacle',
    name: { et: 'Täispuhutav takistusrada', ru: 'Надувная полоса препятствий', en: 'Inflatable Obstacle Course' },
    priceFrom: 350,
    short: { et: 'Sportlik atraktsioon kogukonnaüritustele.', ru: 'Спортивный аттракцион для мероприятий.', en: 'Active attraction for festivals and community days.' },
    description: { et: 'Sobib suurematele üritustele ja noortepäevadele.', ru: 'Подходит для молодежных и семейных мероприятий.', en: 'Suitable for city events, schools and youth gatherings.' },
    age: { et: 'Soovituslik vanus 6+', ru: 'Рекомендуемый возраст 6+', en: 'Recommended age 6+' },
    setup: { et: 'Vajalik 8x4m ala ja elektriühendus.', ru: 'Требуется площадка 8x4м и электричество.', en: 'Requires 8x4m space and power access.' },
    technical: { et: 'Komplektis puhur, kinnitused ja turvamatt.', ru: 'В комплекте компрессор, крепления и маты.', en: 'Includes blower, anchors and safety mats.' },
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80'
  }
];

export const partners = ['Ida-Viru Omavalitsuste Liit', 'Kultuurkapital', 'Erasmus+'];
