import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import appTheme from './appTheme';
import muiTheme from './muiTheme';

const applyTheme = (theme = 'light') => {
  let fullTheme;

  if (theme === 'dark') {
    let muiDark = createMuiTheme(muiTheme.dark);
    muiDark = responsiveFontSizes(muiDark);
    fullTheme = { ...muiDark, ...appTheme.dark };
  } else {
    let muiLight = createMuiTheme(muiTheme.light);
    muiLight = responsiveFontSizes(muiLight);
    fullTheme = { ...muiLight, ...appTheme.light };
  }
  return fullTheme;
};
export default applyTheme;
