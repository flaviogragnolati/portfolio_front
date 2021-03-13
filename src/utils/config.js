import { langList } from 'assets/lang';
import { indigo, grey, orange } from '@material-ui/core/colors';

//defaults
export const defaults = {
  theme: 'dark',
  lang: langList.english,
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
    main: {
      light: grey[100],
      dark: grey[900],
    },
    primary: {
      main: indigo[500],
      // light: '#6f74dd',
      // dark: '#00227b',
      // contrastText: '#ffffff',
    },
    secondary: {
      main: orange['A400'],
      // light: '#ffc246',
      // dark: '#c56200',
      // contrastText: '#000000',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: ' #fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
};
