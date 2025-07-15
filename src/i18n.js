import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ga from './locales/ga.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            pt: { translation: pt },
            en: { translation: en },
            ga: { translation: ga },
            es: { translation: es },
            fr: { translation: fr },
            zh: { translation: zh },
            ja: { translation: ja },
        },
        lng: 'pt', // Default language
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;