import { useMemo } from 'react';
import { useLangContext } from './langContext';
import translations from 'assets/lang';
import { defaults } from 'utils/config';

/**
 * Custom hook that gets the current lang from context, and grabs the corresponding translation
 *
 */
export const useTanslation = () => {
  const [lang] = useLangContext();
  const translation = useMemo(() => {
    return Boolean(lang) ? translations[lang] : translations[defaults.lang];
  }, [lang]);
  return translation;
};
