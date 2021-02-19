import { useEffect, useState } from 'react';
import { getItem } from 'utils/localStorage';
import { setItem } from 'utils/localStorage';

const STORE_THEME = '__theme__';

export const useThemeMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setItem(STORE_THEME, 'dark');
      setTheme('dark');
    } else {
      setItem(STORE_THEME, 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = getItem(STORE_THEME);
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
