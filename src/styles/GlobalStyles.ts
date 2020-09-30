import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
    color: var(--color-text);
    background: none;
    outline: 0;
    border: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: var(--color-background);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  :root {
    ${({ theme }) => 
      Object.entries(theme).map(([prop, value]) => `${prop}: ${value};`)
    }
  }
`;