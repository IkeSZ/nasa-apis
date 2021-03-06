import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *, body {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #1c1c1c;

    @media (max-width: 1024px) {
      background: linear-gradient(to left, #1a1a66, #101052);
    }
  }
`;
