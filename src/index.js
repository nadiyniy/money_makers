import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './variables.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/money_makers">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
