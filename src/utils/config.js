import { langList } from 'assets/lang';
//defaults
export const defaults = {
  lang: langList.spanish,
  sections: ['home', 'about', 'skills', 'projects', 'contact'],
  screens: Object.freeze({
    mobile: 0,
    tablet: 1,
    desktop: 2,
  }),
  aboutCards: {
    team: 'team',
    learn: 'learn',
    work: 'work',
    communication: 'communication',
    problem: 'problem',
    responsible: 'responsible',
  },
};
