import { createMuiTheme } from '@material-ui/core';
import { indigo, teal, orange } from '@material-ui/core/colors';

import { defaults } from 'utils/config';
const { colors } = defaults;

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
      ...colors,
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
      ...colors,
    },
  },
};

/**
 * Object that contains all the overrides to the default Mui theme
 */
export const overridesMuiTheme = {
  overrides: {
    //modifies focus and hover effects of outlined input
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
    //Removes ripple effect on focus of accordion
    MuiAccordionSummary: {
      root: {
        '&$focused': {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
      },
    },
  },
  /**
   * mobile [0,960)
   * tablet.all [720,1280)
   *  tablet.low [720,1024)
   *  tablet.high [1024,1280)
   * desktop [1280,infinity) keep FHD as lg screen
   */
  breakpoints: {
    values: {
      xs: 0,
      sm: 720, //600
      md: 1024, //960
      lg: 1280,
      xl: 2160, //190
    },
  },
};

export default muiTheme;
