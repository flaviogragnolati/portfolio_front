import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
    margin:0;
    padding:0;
    };
  html, body {
    transition: all 500ms ease;
     font-size:1.2rem; 
  };
  *, *::after, *::before {
    box-sizing: border-box;
  }; 
  body {
  background: ${(p) => p.theme.main};
  color: ${(p) => p.theme.palette.text.primary};
  text-rendering: optimizeLegibility;
  };
  a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  }
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
}  `;
