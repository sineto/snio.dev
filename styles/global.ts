import { createGlobalStyle } from "styled-components";
import { ThemeType } from './theme';
interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: calc(14px + .5vw);
    font-family: 'Roboto', 'Lato', sans-serif;
    line-height: 1.5;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray0};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;