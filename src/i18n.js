import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';

const deviceLanguage = Localization.getLocales()[0]?.languageCode || 'en';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    welcome: "Welcome to this app!"
                }
            },
            nl: {
                translation: {
                    welcome: "Welkom op deze app!"
                }
            }
        },
        lng: deviceLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });
