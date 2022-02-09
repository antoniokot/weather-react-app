import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #EEF2FF;
    --secondary: #406882;
    --main: #6998AB;
    --red: #FF5959;
  }
`;
