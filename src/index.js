import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  wrapBorder: `
  border: 2px solid #c9c9c9;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #c9c9c9;
  overflow: hidden;
  `,
  bgColor: '#f9fcfd',
  textColor: {
    grey: '#727272',
    light: '#f9fcfd',
    dark: '#000',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
