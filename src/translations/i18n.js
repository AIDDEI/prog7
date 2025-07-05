import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';
import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceLanguage = Localization.getLocales()[0]?.languageCode?.slice(0, 2) || 'en';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    button: {
                        delete_review: "Remove review",
                        edit_review: "Edit review",
                        map: "View on the map",
                        review: "Write a review",
                        save: "Save",
                        share: "Share this location",
                    },
                    days: {
                        monday: "Monday",
                        tuesday: "Tuesday",
                        wednesday: "Wednesday",
                        thursday: "Thursday",
                        friday: "Friday",
                        saturday: "Saturday",
                        sunday: "Sunday",
                    },
                    delete: {
                        review: "The review has been successfully removed.",
                        review_title: "Review removed",
                    },
                    error: {
                        delete_review: "Something went wrong while deleting the review. Please try again later.",
                        error: "Error",
                        review: "There was an error loading the review. Please try again later.",
                        share: "Sharing failed. Please try again later.",
                    },
                    generic: {
                        address: "Address",
                        closed: "Closed",
                        description: "Description",
                        like: "❤️",
                        like_empty: "🤍",
                        location: "Location",
                        music: "Types of music",
                        opening_hours: "Opening hours",
                        review: "Review",
                        success: "Success",
                        type: "Type",
                        website: "Website",
                    },
                    header: {
                        list: "List view",
                        location: "Location details",
                        map: "Map",
                        review: "Add a review",
                        review_location: "Add a review to ",
                        settings: "Settings",
                    },
                    language: {
                        dutch: "Nederlands (Dutch)",
                        english: "English",
                        german: "Deutsch (German)",
                        spanish: "Español (Spanish)",
                        chinese: "中国人 (Chinese)",
                    },
                    location: {
                        current: "My location",
                        denied: "Permission to access location was denied.",
                        retrieve: "Retrieving current location... Please be patient.",
                    },
                    review: {
                        addPhoto: "Add photo",
                        photo: "Your photo",
                        placeholder: "Write a review...",
                        saved: "The review has been saved successfully!",
                        your_review: "Your review",
                    },
                    settings: {
                        language: "Language",
                        set_language: "Select language",
                        set_theme: "Select theme",
                        theme: "Theme",
                    },
                    themes: {
                        light: "Light Theme",
                        dark: "Dark Theme",
                        retro: "Retro Theme",
                    },
                }
            },
            nl: {
                translation: {
                    button: {
                        delete_review: "Verwijder review",
                        edit_review: "Bewerk review",
                        map: "Bekijk op de kaart",
                        review: "Schrijf een review",
                        save: "Opslaan",
                        share: "Deel deze locatie",
                    },
                    days: {
                        monday: "Maandag",
                        tuesday: "Dinsdag",
                        wednesday: "Woensdag",
                        thursday: "Donderdag",
                        friday: "Vrijdag",
                        saturday: "Zaterdag",
                        sunday: "Zondag",
                    },
                    delete: {
                        review: "De review is succesvol verwijderd.",
                        review_title: "Review verwijderd",
                    },
                    error: {
                        delete_review: "Er is iets misgegaan bij het verwijderen van de review. Probeer het later opnieuw.",
                        error: "Fout",
                        review: "Er is een fout opgetreden bij het laden van de review. Probeer het later opnieuw.",
                        share: "Delen mislukt. Probeer het later opnieuw.",
                    },
                    generic: {
                        address: "Adres",
                        closed: "Gesloten",
                        description: "Beschrijving",
                        like: "❤️",
                        like_empty: "🤍",
                        location: "Locatie",
                        music: "Soorten muziek",
                        opening_hours: "Openingstijden",
                        review: "Review",
                        success: "Gelukt",
                        type: "Type",
                        website: "Website",
                    },
                    header: {
                        list: "Lijstweergave",
                        location: "Locatie details",
                        map: "Kaart",
                        review: "Voeg een review toe",
                        review_location: "Voeg een review toe aan ",
                        settings: "Instellingen",
                    },
                    language: {
                        dutch: "Nederlands",
                        english: "English (Engels)",
                        german: "Deutsch (Duits)",
                        spanish: "Español (Spaans)",
                        chinese: "中国人 (Chinees)",
                    },
                    location: {
                        current: "Mijn locatie",
                        denied: "De toestemming voor toegang tot jouw locatie is geweigerd.",
                        retrieve: "Huidige locatie ophalen... Even geduld a.u.b.",
                    },
                    review: {
                        addPhoto: "Foto toevoegen",
                        photo: "Jouw foto",
                        placeholder: "Schrijf een review...",
                        saved: "De review is succesvol opgeslagen!",
                        your_review: "Jouw review",
                    },
                    settings: {
                        language: "Taal",
                        set_language: "Selecteer taal",
                        set_theme: "Selecteer thema",
                        theme: "Thema",
                    },
                    themes: {
                        light: "Licht Thema",
                        dark: "Donker Thema",
                        retro: "Retro Thema",
                    },
                }
            },
            de: {
                translation: {
                    button: {
                        delete_review: "Bewertung entfernen",
                        edit_review: "Bewertung bearbeiten",
                        map: "Auf der Karte anzeigen",
                        review: "Schreiben Sie eine Rezension",
                        save: "Speichern",
                        share: "Diesen Standort teilen",
                    },
                    days: {
                        monday: "Montag",
                        tuesday: "Dienstag",
                        wednesday: "Mittwoch",
                        thursday: "Donnerstag",
                        friday: "Freitag",
                        saturday: "Samstag",
                        sunday: "Sonntag",
                    },
                    delete: {
                        review: "Die Rezension wurde erfolgreich entfernt.",
                        review_title: "Rezension entfernt",
                    },
                    error: {
                        delete_review: "Beim Löschen der Rezension ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                        error: "Fehler",
                        review: "Beim Laden der Überprüfung ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                        share: "Beim Teilen ist ein Fehler aufgetreten. Versuchen Sie es später erneut.",
                    },
                    generic: {
                        address: "Adresse",
                        closed: "Geschlossen",
                        description: "Die Beschreibung",
                        like: "❤️",
                        like_empty: "🤍",
                        location: "Der Standort",
                        music: "Arten von Musik",
                        opening_hours: "Öffnungszeiten",
                        review: "Die Überprüfung",
                        success: "Erfolg",
                        type: "Typ",
                        website: "Webseite",
                    },
                    header: {
                        list: "Listenansicht",
                        location: "Standortdetails",
                        map: "Karte",
                        review: "Bewertung hinzufügen",
                        review_location: "Fügen Sie eine Bewertung hinzu zu ",
                        settings: "Institutionen",
                    },
                    language: {
                        dutch: "Nederlands (Niederländisch)",
                        english: "English (Englisch)",
                        german: "Deutsch",
                        spanish: "Español (Spanisch)",
                        chinese: "中国人 (Chinesisch)",
                    },
                    location: {
                        current: "Mein Standort",
                        denied: "Die Berechtigung zum Zugriff auf Ihren Standort wurde verweigert.",
                        retrieve: "Aktueller Standort wird abgerufen ... Bitte warten.",
                    },
                    review: {
                        addPhoto: "Foto hinzufügen",
                        photo: "Dein Foto",
                        placeholder: "Schreiben Sie eine Bewertung...",
                        saved: "Die Bewertung wurde erfolgreich gespeichert!",
                        your_review: "Ihre Bewertung",
                    },
                    settings: {
                        language: "Sprache",
                        set_language: "Sprache auswählen",
                        set_theme: "Thema auswählen",
                        theme: "Thema",
                    },
                    themes: {
                        light: "Helles Design",
                        dark: "Dunkles Design",
                        retro: "Retro-Design",
                    },
                }
            },
            es: {
                translation: {
                    button: {
                        delete_review: "Eliminar reseña",
                        edit_review: "Editar reseña",
                        map: "Ver en el mapa",
                        review: "Escribe una reseña",
                        save: "Ahorrar",
                        share: "Comparte esta ubicación",
                    },
                    days: {
                        monday: "Lunes",
                        tuesday: "Martes",
                        wednesday: "Miércoles",
                        thursday: "Jueves",
                        friday: "Viernes",
                        saturday: "Sábado",
                        sunday: "Domingo",
                    },
                    delete: {
                        review: "La reseña ha sido eliminada exitosamente.",
                        review_title: "Reseña eliminada",
                    },
                    error: {
                        delete_review: "Se produjo un error al eliminar la reseña. Inténtalo de nuevo más tarde.",
                        error: "Equivocado",
                        review: "Se produjo un error al cargar la reseña. Inténtalo de nuevo más tarde.",
                        share: "Error al compartir. Inténtalo de nuevo más tarde.",
                    },
                    generic: {
                        address: "Dirección",
                        closed: "Cerrado",
                        description: "Descripción",
                        like: "❤️",
                        like_empty: "🤍",
                        location: "Ubicación",
                        music: "Tipos de música",
                        opening_hours: "Horario",
                        review: "Revisar",
                        success: "Éxito",
                        type: "Tipo",
                        website: "Sitio web",
                    },
                    header: {
                        list: "Vista de lista",
                        location: "Detalles de ubicación",
                        map: "Mapa",
                        review: "Añadir una reseña",
                        review_location: "Añadir una reseña a ",
                        settings: "Instituciones",
                    },
                    language: {
                        dutch: "Nederlands (Holandés)",
                        english: "English (Inglés)",
                        german: "Deutsch (Alemán)",
                        spanish: "Español",
                        chinese: "中国人 (Chino)",
                    },
                    location: {
                        current: "Mi ubicación",
                        denied: "Se ha denegado el permiso para acceder a su ubicación.",
                        retrieve: "Obteniendo ubicación actual... Por favor espere.",
                    },
                    review: {
                        addPhoto: "Añadir foto",
                        photo: "Tu foto",
                        placeholder: "Escribe una reseña...",
                        saved: "¡La reseña ha sido guardada exitosamente!",
                        your_review: "Tu reseña",
                    },
                    settings: {
                        language: "Idioma",
                        set_language: "Seleccionar idioma",
                        set_theme: "Seleccionar tema",
                        theme: "Tema",
                    },
                    themes: {
                        light: "Tema Claro",
                        dark: "Tema Oscuro",
                        retro: "Tema Retro",
                    },
                }
            },
            zh: {
                translation: {
                    button: {
                        delete_review: "删除评论",
                        edit_review: "编辑评论",
                        map: "在地图上查看",
                        review: "撰写评论",
                        save: "节省",
                        share: "分享此位置",
                    },
                    days: {
                        monday: "星期一",
                        tuesday: "星期二",
                        wednesday: "星期三",
                        thursday: "星期四",
                        friday: "星期五",
                        saturday: "星期六",
                        sunday: "星期日",
                    },
                    delete: {
                        review: "该评论已被成功删除。",
                        review_title: "已删除评论",
                    },
                    error: {
                        delete_review: "删除评论时出现错误。请稍后重试。",
                        error: "错误的",
                        review: "加载点评时出错。请稍后重试。",
                        share: "分享失败，请稍后重试。",
                    },
                    generic: {
                        address: "地址",
                        closed: "已关闭",
                        description: "描述",
                        like: "❤️",
                        like_empty: "🤍",
                        location: "地点",
                        music: "音乐类型",
                        opening_hours: "营业时间",
                        review: "审查",
                        success: "成功",
                        type: "类型",
                        website: "网站",
                    },
                    header: {
                        list: "列表视图",
                        location: "位置详情",
                        map: "卡片",
                        review: "添加评论",
                        review_location: "添加评论 ",
                        settings: "机构",
                    },
                    language: {
                        dutch: "Nederlands (荷兰语)",
                        english: "English (英语)",
                        german: "Deutsch (德语)",
                        spanish: "Español (西班牙语)",
                        chinese: "中国人",
                    },
                    location: {
                        current: "我的位置",
                        denied: "访问您的位置的权限已被拒绝。",
                        retrieve: "正在获取当前位置...请等待。",
                    },
                    review: {
                        addPhoto: "添加照片",
                        photo: "您的照片",
                        placeholder: "撰写评论...",
                        saved: "评论已成功保存！",
                        your_review: "您的评论",
                    },
                    settings: {
                        language: "语言",
                        set_language: "选择语言",
                        set_theme: "选择主题",
                        theme: "主题",
                    },
                    themes: {
                        light: "浅色主题",
                        dark: "深色主题",
                        retro: "复古主题",
                    },
                }
            }
        },
        lng: deviceLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

AsyncStorage.getItem('appLanguage').then(lang => {
    if (lang && lang !== i18next.language) {
        i18next.changeLanguage(lang);
    }
});

export default i18next;