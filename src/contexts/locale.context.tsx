import { defaultLocale, getTranslator } from '@/locale/i18n';
import { ValidLocale } from '@/locale/i18n';
import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';


export type TranslationParams = {
  [key: string]: string | number;
};

interface ITranslationContext {
  t: (key: string, params?: TranslationParams) => ReactNode;
  setLang: (lang: ValidLocale) => void;
  lang: ValidLocale;
}

interface ITranslationProps {
  children: ReactNode;
}

const LocaleContext = createContext<ITranslationContext>({} as ITranslationContext);

export const useLocaleContext = () => useContext(LocaleContext);

function useDelayedRender<T>(asyncFun: () => Promise<T>, deps: ValidLocale[] = []) {
  const [output, setOutput] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        setOutput(await asyncFun());
      } catch (e) {
        console.error(e);
      }
    })();
  }, deps);

  return output ?? null;
}

export const LocaleContextProvider = ({ children }: PropsWithChildren<ITranslationProps>) => {
  const [lang, setLang] = useLocalStorage<ValidLocale>('lang', defaultLocale);
  const currentLang: ValidLocale = lang || defaultLocale;

  const [t, setT] = useState<(key: string, params?: TranslationParams) => ReactNode>(() => () => '');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslator = async () => {
      const translator = await getTranslator(currentLang);
      setT(() => translator);
      setLoading(false);
    };
    loadTranslator();
  }, [currentLang]);

  if (loading) return null; // Or show a loading spinner

  return (
    <LocaleContext.Provider value={{ t, setLang, lang: currentLang }}>
      {children}
    </LocaleContext.Provider>
  );
};
