export const languages = ['et', 'ru', 'en'] as const;
export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
  et: 'ET',
  ru: 'RU',
  en: 'EN'
};

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function localize<T extends Record<Lang, string>>(value: T, lang: Lang): string {
  return value[lang] || value.en;
}
