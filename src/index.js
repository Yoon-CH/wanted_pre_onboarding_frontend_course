import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
