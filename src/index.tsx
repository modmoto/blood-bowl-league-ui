import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import languages from "./i18n/languages";
import {getBrowserLanguage} from "./helpers";

const language = getBrowserLanguage();

i18n
    .use(initReactI18next)
    .init({
        resources: languages,
        lng: language,
        fallbackLng: "de",
    });

ReactDOM.render(<App />, document.getElementById('root'));