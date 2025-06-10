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
                    map_title: "Map view",
                    list_title: "List view",
                    settings_title: "Settings",
                    welcome: "Welcome to this app!",
                    test: "Text for testing",
                    test2: "Other text for testing"
                }
            },
            nl: {
                translation: {
                    map_title: "Kaartweergave",
                    list_title: "Lijstweergave",
                    settings_title: "Instellingen",
                    welcome: "Welkom op deze app!",
                    test: "Tekst om mee te testen",
                    test2: "Andere tekst om mee te testen"
                }
            }
        },
        lng: deviceLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });
