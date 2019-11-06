import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import languages from "./i18nResources/languages.js";
import LanguageDetector from 'i18next-browser-languagedetector';

function getBrowserLanguage() {
    const language = window.navigator.userLanguage || window.navigator.language;
    if (!language) return null

    const languagePart = language.split('-')
    if (languagePart.length >= 1) {
        return languagePart[0]
    }
    return null
}

const language = getBrowserLanguage()

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: languages,
        lng:  language,
        fallbackLng: "de",
    });

ReactDOM.render(<App />, document.getElementById('root'));