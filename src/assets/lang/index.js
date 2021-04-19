import EN from './en';
import ES from './es';
import SHARED from './shared';

export const langList = {
  english: 'en',
  spanish: 'es',
};

const translations = {
  en: { ...EN, ...SHARED },
  es: { ...ES, ...SHARED },
  // TODO: translate content to fr aand it
  it: {},
  fr: {},
};

export default translations;
