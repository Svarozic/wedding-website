export const LANGUAGE = {
  sk: 'sk',
  sr: 'sr',
  en: 'en',
} as const;

export const ALL_LANGUAGES = [LANGUAGE.en, LANGUAGE.sk, LANGUAGE.sr] as const;
export type Lang = (typeof ALL_LANGUAGES)[number];
export const isLang = (value: string | undefined): value is Lang => ALL_LANGUAGES.includes(value as Lang);

export const LANGUAGE_LABEL: {readonly [key in Lang]: string} = {
  sk: 'Slovensky',
  sr: 'Srpski',
  en: 'English',
};

export const DEFAULT_LANGUAGE: Lang = 'sk';

export const TRANSLATIONS = {
  sk: {
    'LanguagePicker.title': 'Vyberte jazyk',
  },
  sr: {
    'LanguagePicker.title': 'Izaberite jezik',
  },
  en: {
    'LanguagePicker.title': 'Pick the language',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  return isLang(lang) ? lang : DEFAULT_LANGUAGE;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANGUAGE]) {
    return TRANSLATIONS[lang][key] || TRANSLATIONS[DEFAULT_LANGUAGE][key];
  };
}
