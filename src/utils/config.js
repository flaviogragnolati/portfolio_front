import { langList } from 'assets/lang';
import { indigo, teal, orange } from '@material-ui/core/colors';

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
  colors: {
    primary: { main: indigo[500] },
    secondary: { main: orange['A400'] },
  },
};
