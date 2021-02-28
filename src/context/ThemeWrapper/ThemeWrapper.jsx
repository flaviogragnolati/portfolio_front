import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  CssBaseline,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core';
import { GlobalStyles } from './GlobalStyles';
import applyTheme from './applyTheme';
import { ThemeContext } from './themeContext';
import { useThemeMode } from './useThemeMode';

/**
 *
 * Theme Wrapper component handles all the theming in the app, children recieved are the ones that get `themed`
 *
 * useThemeMode() is a custom hook that returns:
 * the current theme mode, theme<string>:'light'|'dark', and,
 * the toggler funcion, toggleTheme<func>:void, to toggle the theme variable, also,
 * the theme gets stored in LocalStorage to remeber user preference
 *
 * fullTheme, is the complete theme object, (MUI & custom),
 * its called under useMemo, so that applyTheme gets only called when theme (from the custom hook) changes
 *
 * applyTheme is a function that combines de MUI theme with the custom app theme, according to the mode (light|dark)
 *
 * ThemeContext is a custom context to pass the useThemeMode() custom hook to all children,
 * in order to avoid prop drilling the toggleTheme func or the theme prop,
 * and to create single source of truth of the theme.
 * It might be an overkill :D
 *
 *
 */
function ThemeWrapper({ children }) {
  const themeCtxValue = useThemeMode();
  const [theme] = themeCtxValue;
  const fullTheme = useMemo(() => applyTheme(theme), [theme]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={fullTheme}>
        <MuiThemeProvider theme={fullTheme}>
          <GlobalStyles />
          <CssBaseline />
          <ThemeContext.Provider value={themeCtxValue}>
            {children}
          </ThemeContext.Provider>
        </MuiThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default ThemeWrapper;

ThemeWrapper.defaultProps = {
  children: null,
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
