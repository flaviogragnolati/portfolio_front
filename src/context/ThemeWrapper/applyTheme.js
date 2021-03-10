import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import appTheme from './appTheme';
import muiTheme, { overridesMuiTheme } from './muiTheme';
import { defaults } from 'utils/config';

const applyTheme = (theme = defaults.theme) => {
  let fullTheme;

  if (theme === 'dark') {
    let muiDark = createMuiTheme({ ...muiTheme.dark, ...overridesMuiTheme });
    muiDark = responsiveFontSizes(muiDark);
    fullTheme = { ...muiDark, ...appTheme.dark };
  } else {
    let muiLight = createMuiTheme({ ...muiTheme.light, ...overridesMuiTheme });
    muiLight = responsiveFontSizes(muiLight);
    fullTheme = { ...muiLight, ...appTheme.light };
  }
  return fullTheme;
};
export default applyTheme;
