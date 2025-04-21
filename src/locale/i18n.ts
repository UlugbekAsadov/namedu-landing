export const defaultLocale: ValidLocale = 'uz';

export const locales = ['uz', 'ru', 'en'];

export type ValidLocale = (typeof locales)[number];
export type Dictionary = Record<string, any>;

const dictionaries: Record<ValidLocale, () => Promise<Dictionary>> = {
  uz: () => import('./dictionaries/uz.json').then((module) => module.default) as Promise<Dictionary>,
  ru: () => import('./dictionaries/ru.json').then((module) => module.default) as Promise<Dictionary>,
  en: () => import('./dictionaries/en.json').then((module) => module.default) as Promise<Dictionary>,
};

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();

  return getTranslatedValue(dictionary);
};

function getTranslatedValue(dictionary: Record<string, any>) {
  return (translationKey: string, params?: { [key: string]: string | number }) => {
    const keys = translationKey.split('.');
    let translation = keys.reduce((obj, key) => (obj && obj[key] ? obj[key] : null), dictionary);

    if (typeof translation !== 'string') {
      return translationKey; // fallback if not found or not string
    }

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{{ ${key} }}`, String(value));
      });
    }

    return translation;
  };
}
