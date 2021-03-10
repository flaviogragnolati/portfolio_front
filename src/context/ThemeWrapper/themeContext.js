import { createContext, useContext } from 'react';
import { defaults } from 'utils/config';

export const ThemeContext = createContext({
  theme: defaults.theme,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const T = useContext(ThemeContext);
  const [theme, toggleTheme] = T;

  if (theme === undefined || toggleTheme === undefined) {
    throw new Error('Using theme context outside provider');
  }
  if (typeof theme !== 'string' || typeof toggleTheme !== 'function') {
    throw new Error('theme is no a str or toggleTheme is not a func');
  }
  return T;
};
