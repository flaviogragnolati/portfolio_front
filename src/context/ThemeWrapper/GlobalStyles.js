import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{margin:0;padding:0}
  html, body {
    transition: all 0.25s linear;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    /* align-items: center; */
    background: ${(p) => p.theme.main};
    color: ${(p) => p.theme.palette.primary.contrastText};
    /* display: flex; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* height: 100vh; */
    /* justify-content: center; */
    text-rendering: optimizeLegibility;
  }
.root{
	--tamarind:#36161e;
	--piper:#d05327;
	--manatee:#8992aa;
	--waterloo:#787e98;
	--white:#ffffff;
	--dark:#1a1a1a;
  --black: #0D0C1D;
}  `;
