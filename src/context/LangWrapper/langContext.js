import { createContext, useContext } from 'react';
import { defaults } from 'utils/config';

export const LangContext = createContext({
  lang: defaults.lang,
  changeLang: () => {},
});

/**
 * Custom hook to get access to the lang variable and the setLang func
 */
export const useLangContext = () => {
  const L = useContext(LangContext);
  const [lang, changeLang] = L;

  if (lang === undefined || changeLang === undefined) {
    throw new Error('Using lang context outside provider');
  }

  if (typeof lang !== 'string' || typeof changeLang !== 'function') {
    throw new Error('lang is not a str or changeLang is not a func');
  }

  return L;
};
