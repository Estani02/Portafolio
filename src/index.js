import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import en_global from './translation/en/global.json';
import es_global from './translation/es/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: es_global
    },
    en: {
      global: en_global
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);


