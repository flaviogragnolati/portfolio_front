import EN from './en';
import ES from './es';

export const langList = {
  english: 'en',
  spanish: 'es',
};

const translations = {
  en: { ...EN },
  es: { ...ES },
  it: {},
  fr: {},
};

export default translations;
