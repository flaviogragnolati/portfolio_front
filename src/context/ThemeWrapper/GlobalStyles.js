import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{margin:0;padding:0}
  html, body {
    transition: all 0.25s linear;
    font-size:1.2rem;
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
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
}  `;
