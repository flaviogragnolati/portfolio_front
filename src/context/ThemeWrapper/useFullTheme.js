import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useFullTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error(
      'Using theme context outside styled-components themeContext provider'
    );
  }
  return themeContext;
};

export default useFullTheme;
