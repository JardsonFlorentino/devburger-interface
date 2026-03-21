import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`
  :root {
    --max-width: 1200px;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --radius: 8px;
    --color-primary: #ff6b00;
    --color-text: #1f2937;
  }

  html {
    font-size: clamp(14px, 1.5vw, 16px);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--color-text);
    background: #fff;
    -webkit-tap-highlight-color: transparent;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  button, a {
    cursor: pointer;
  }

  button {
    min-height: 44px;
    min-width: 44px;
  }

  /* utility grid for product lists */
  .grid-products {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  /* focus visible for accessibility */
  :focus {
    outline: 3px solid rgba(0,0,0,0.12);
    outline-offset: 2px;
  }

  /* reduce motion preference */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
      animation-duration: 0s !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default globalStyles;
