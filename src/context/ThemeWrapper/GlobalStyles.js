import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
    margin:0;
    padding:0
    };
  html, body {
    transition: all 500ms ease;
     font-size:1.2rem; 
  };
  *, *::after, *::before {
    box-sizing: border-box;
  }; 
    body {
    /* align-items: center; */
    background: ${(p) => p.theme.main};
    color: ${(p) => p.theme.palette.text.primary};
    /* display: flex; */
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    /* height: 100vh; */
    /* justify-content: center; */
    /* text-rendering: optimizeLegibility; */
  };
}  `;
