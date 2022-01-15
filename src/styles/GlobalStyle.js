import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  /* font-family: 'icomoon' !important; */
  min-width: 990px;
`;

export default GlobalStyle;
