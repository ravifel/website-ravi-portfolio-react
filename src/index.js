// Entry point: initializes i18n, renders the main App, and loads global styles.
import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base/main.css';
import './styles/base/theme.css';

// Create React root and render the App wrapped in StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);