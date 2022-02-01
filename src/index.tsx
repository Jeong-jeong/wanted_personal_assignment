import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from '@redux/stores';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
