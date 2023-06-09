import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store/store';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
