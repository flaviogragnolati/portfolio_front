import { createMuiTheme } from '@material-ui/core';
import { indigo, teal, orange } from '@material-ui/core/colors';

const contrastThreshold = 3;

const muiTheme = {
  light: {
    themeName: 'light',
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Roboto',
        'Lato',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    mixins: {
      toolbar: {
        minHeight: 0,
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: orange['A400'],
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
  },
  dark: {
    themeName: 'dark',
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Roboto',
        'Lato',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    mixins: {
      toolbar: {
        minHeight: 0,
      },
    },
    palette: {
      type: 'dark',
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: orange['A400'],
      },
    },
  },
};

/**
 * Object that contains all the overrides to the default Mui theme
 */
export const overridesMuiTheme = {
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: indigo[300],
        },
        '&$focused $notchedOutline': {
          borderWidth: 2,
          borderLeftWidth: 8,
          padding: '4px !important',
        },
      },
    },
  },
};

export default muiTheme;
