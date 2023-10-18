export const LANGUAGE = {
  sk: 'sk',
  sr: 'sr',
  en: 'en',
} as const;

export const ALL_LANGUAGES = [LANGUAGE.sk, LANGUAGE.sr, LANGUAGE.en] as const;
export type Lang = (typeof ALL_LANGUAGES)[number];
export const isLang = (value: string | undefined): value is Lang => ALL_LANGUAGES.includes(value as Lang);

export const LANGUAGE_LABEL: {readonly [key in Lang]: string} = {
  sk: 'Slovensky',
  sr: 'Srpski',
  en: 'English',
};

export const DEFAULT_LANGUAGE = 'sk';

export const TRANSLATIONS = {
  sk: {
    'BaseLayout.title': 'Ivana & Peter',
    'Countdown.days': 'dni',
    'Countdown.hours': 'hodiny',
    'Countdown.minutes': 'minúty',
    'Countdown.seconds': 'sekundy',
    'Hero.subheader': 'Budeme sa brať!',
    'LanguagePicker.title': 'Vyberte jazyk',
    'Navigation.place': 'Miesto',
  },
  sr: {
    'Countdown.days': 'dani',
    'Countdown.hours': 'sati',
    'Countdown.minutes': 'minute',
    'Countdown.seconds': 'sekunde',
    'Hero.subheader': 'Venčaćemo se!',
    'LanguagePicker.title': 'Izaberite jezik',
    'Navigation.place': 'Mesto',
  },
  en: {
    'Countdown.days': 'days',
    'Countdown.hours': 'hours',
    'Countdown.minutes': 'minutes',
    'Countdown.seconds': 'seconds',
    'Hero.subheader': 'We will get married!',
    'LanguagePicker.title': 'Pick the language',
    'Navigation.place': 'Place',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  return isLang(lang) ? lang : DEFAULT_LANGUAGE;
}

export function useTranslations(lang: keyof typeof TRANSLATIONS) {
  return function t(key: keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANGUAGE]) {
    // @ts-ignore
    return TRANSLATIONS[lang][key] || TRANSLATIONS[DEFAULT_LANGUAGE][key];
  };
}
