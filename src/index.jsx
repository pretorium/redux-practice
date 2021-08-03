import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/iconos.css';
import { Provider } from 'react-redux';
import App from './App';
import Store from './providers';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
