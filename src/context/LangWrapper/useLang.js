import { useEffect, useState } from 'react';
import { getItem, setItem } from 'utils/localStorage';
import { langList } from 'assets/lang';
import { defaults } from 'utils/config';
const STORE_LANG = '__lang__';

const useLang = () => {
  const [lang, setLang] = useState(defaults.lang);
  useEffect(() => {
    const localLang = getItem(STORE_LANG);
    localLang && setLang(localLang);
  }, []);

  const changeLang = (lang) => {
    if (typeof lang !== 'string') return null;
    setLang(lang);
    setItem(STORE_LANG, lang);
  };

  return [lang, changeLang];
};

export default useLang;
