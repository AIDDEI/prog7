import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';
import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceLanguage = Localization.getLocales()[0]?.languageCode?.slice(0,2) || 'en';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    header: {
                        list: "List view",
                        location: "Location details",
                        review_location: "Add a review to ",
                        review: "Add a review",
                        map: "Map",
                        settings: "Settings",
                    },
                    delete: {
                        review_title: "Review removed",
                        review: "The review has been successfully removed.",
                    },
                    error: {
                        error: "Error",
                        delete_review: "Something went wrong while deleting the review. Please try again later.",
                        share: "Sharing failed. Please try again later.",
                        review: "There was an error loading the review. Please try again later.",
                    },
                    generic: {
                        location: "Location",
                        description: "Description",
                        review: "Review",
                        like: "❤️",
                        success: "Success",
                        type: "Type",
                        address: "Address",
                        website: "Website",
                        opening_hours: "Opening hours",
                        music: "Types of music",
                        closed: "Closed",
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
                    button: {
                        map: "View on the map",
                        review: "Write a review",
                        delete_review: "Remove review",
                        share: "Share this location",
                        save: "Save",
                        edit_review: "Edit review",
                    },
                    location: {
                        retrieve: "Retrieving current location... Please be patient.",
                        current: "My location",
                        denied: "Permission to access location was denied.",
                    },
                    review: {
                        saved: "The review has been saved successfully!",
                        placeholder: "Write a review...",
                        photo: "Add photo",
                    },
                    settings: {
                        language: "Language",
                        theme: "Theme",
                        set_language: "Select language",
                    },
                    language: {
                        dutch: "Nederlands (Dutch)",
                        english: "English",
                        german: "Deutsch (German)",
                        spanish: "Español (Spanish)",
                        chinese: "中国人 (Chinese)",
                    },
                }
            },
            nl: {
                translation: {
                    header: {
                        list: "Lijstweergave",
                        location: "Locatie details",
                        review_location: "Voeg een review toe aan ",
                        review: "Voeg een review toe",
                        map: "Kaart",
                        settings: "Instellingen",
                    },
                    delete: {
                        review_title: "Review verwijderd",
                        review: "De review is succesvol verwijderd.",
                    },
                    error: {
                        error: "Fout",
                        delete_review: "Er is iets misgegaan bij het verwijderen van de review. Probeer het later opnieuw.",
                        share: "Delen mislukt. Probeer het later opnieuw.",
                        review: "Er is een fout opgetreden bij het laden van de review. Probeer het later opnieuw.",
                    },
                    generic: {
                        location: "Locatie",
                        description: "Beschrijving",
                        review: "Review",
                        like: "❤️",
                        like_empty: "🤍",
                        success: "Gelukt",
                        type: "Type",
                        address: "Adres",
                        website: "Website",
                        opening_hours: "Openingstijden",
                        music: "Soorten muziek",
                        closed: "Gesloten",
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
                    button: {
                        map: "Bekijk op de kaart",
                        review: "Schrijf een review",
                        delete_review: "Verwijder review",
                        share: "Deel deze locatie",
                        save: "Opslaan",
                        edit_review: "Bewerk review",
                    },
                    location: {
                        retrieve: "Huidige locatie ophalen... Even geduld a.u.b.",
                        current: "Mijn locatie",
                        denied: "De toestemming voor toegang tot jouw locatie is geweigerd.",
                    },
                    review: {
                        saved: "De review is succesvol opgeslagen!",
                        placeholder: "Schrijf een review...",
                        photo: "Foto toevoegen",
                    },
                    settings: {
                        language: "Taal",
                        theme: "Thema",
                        set_language: "Selecteer taal",
                    },
                    language: {
                        dutch: "Nederlands",
                        english: "English (Engels)",
                        german: "Deutsch (Duits)",
                        spanish: "Español (Spaans)",
                        chinese: "中国人 (Chinees)",
                    },
                }
            },
            de: {
                translation: {
                    header: {
                        list: "Listenansicht",
                        location: "Standortdetails",
                        review_location: "Fügen Sie eine Bewertung hinzu zu ",
                        review: "Bewertung hinzufügen",
                        map: "Karte",
                        settings: "Institutionen",
                    },
                    delete: {
                        review_title: "Rezension entfernt",
                        review: "Die Rezension wurde erfolgreich entfernt.",
                    },
                    error: {
                        error: "Fehler",
                        delete_review: "Beim Löschen der Rezension ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                        share: "Beim Teilen ist ein Fehler aufgetreten. Versuchen Sie es später erneut.",
                        review: "Beim Laden der Überprüfung ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                    },
                    generic: {
                        location: "Der Standort",
                        description: "Die Beschreibung",
                        review: "Die Überprüfung",
                        like: "❤️",
                        like_empty: "🤍",
                        success: "Erfolg",
                        type: "Typ",
                        address: "Adresse",
                        website: "Webseite",
                        opening_hours: "Öffnungszeiten",
                        music: "Arten von Musik",
                        closed: "Geschlossen",
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
                    button: {
                        map: "Auf der Karte anzeigen",
                        review: "Schreiben Sie eine Rezension",
                        delete_review: "Bewertung entfernen",
                        share: "Diesen Standort teilen",
                        save: "Speichern",
                        edit_review: "Bewertung bearbeiten",
                    },
                    location: {
                        retrieve: "Aktueller Standort wird abgerufen ... Bitte warten.",
                        current: "Mein Standort",
                        denied: "Die Berechtigung zum Zugriff auf Ihren Standort wurde verweigert.",
                    },
                    review: {
                        saved: "Die Bewertung wurde erfolgreich gespeichert!",
                        placeholder: "Schreiben Sie eine Bewertung...",
                        photo: "Foto hinzufügen",
                    },
                    settings: {
                        language: "Sprache",
                        theme: "Thema",
                        set_language: "Sprache auswählen",
                    },
                    language: {
                        dutch: "Nederlands (Niederländisch)",
                        english: "English (Englisch)",
                        german: "Deutsch",
                        spanish: "Español (Spanisch)",
                        chinese: "中国人 (Chinesisch)",
                    },
                }
            },
            es: {
                translation: {
                    header: {
                        list: "Vista de lista",
                        location: "Detalles de ubicación",
                        review_location: "Añadir una reseña a ",
                        review: "Añadir una reseña",
                        map: "Mapa",
                        settings: "Instituciones",
                    },
                    delete: {
                        review_title: "Reseña eliminada",
                        review: "La reseña ha sido eliminada exitosamente.",
                    },
                    error: {
                        error: "Equivocado",
                        delete_review: "Se produjo un error al eliminar la reseña. Inténtalo de nuevo más tarde.",
                        share: "Error al compartir. Inténtalo de nuevo más tarde.",
                        review: "Se produjo un error al cargar la reseña. Inténtalo de nuevo más tarde.",
                    },
                    generic: {
                        location: "Ubicación",
                        description: "Descripción",
                        review: "Revisar",
                        like: "❤️",
                        like_empty: "🤍",
                        success: "Éxito",
                        type: "Tipo",
                        address: "Dirección",
                        website: "Sitio web",
                        opening_hours: "Horario",
                        music: "Tipos de música",
                        closed: "Cerrado",
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
                    button: {
                        map: "Ver en el mapa",
                        review: "Escribe una reseña",
                        delete_review: "Eliminar reseña",
                        share: "Comparte esta ubicación",
                        save: "Ahorrar",
                        edit_review: "Editar reseña",
                    },
                    location: {
                        retrieve: "Obteniendo ubicación actual... Por favor espere.",
                        current: "Mi ubicación",
                        denied: "Se ha denegado el permiso para acceder a su ubicación.",
                    },
                    review: {
                        saved: "¡La reseña ha sido guardada exitosamente!",
                        placeholder: "Escribe una reseña...",
                        photo: "Añadir foto",
                    },
                    settings: {
                        language: "Idioma",
                        theme: "Tema",
                        set_language: "Seleccionar idioma",
                    },
                    language: {
                        dutch: "Nederlands (Holandés)",
                        english: "English (Inglés)",
                        german: "Deutsch (Alemán)",
                        spanish: "Español",
                        chinese: "中国人 (Chino)",
                    },
                }
            },
            zh: {
                translation: {
                    header: {
                        list: "列表视图",
                        location: "位置详情",
                        review_location: "添加评论 ",
                        review: "添加评论",
                        map: "卡片",
                        settings: "机构",
                    },
                    delete: {
                        review_title: "已删除评论",
                        review: "该评论已被成功删除。",
                    },
                    error: {
                        error: "错误的",
                        delete_review: "删除评论时出现错误。请稍后重试。",
                        share: "分享失败，请稍后重试。",
                        review: "加载点评时出错。请稍后重试。",
                    },
                    generic: {
                        location: "地点",
                        description: "描述",
                        review: "审查",
                        like: "❤️",
                        like_empty: "🤍",
                        success: "成功",
                        type: "类型",
                        address: "地址",
                        website: "网站",
                        opening_hours: "营业时间",
                        music: "音乐类型",
                        closed: "已关闭",
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
                    button: {
                        map: "在地图上查看",
                        review: "撰写评论",
                        delete_review: "删除评论",
                        share: "分享此位置",
                        save: "节省",
                        edit_review: "编辑评论",
                    },
                    location: {
                        retrieve: "正在获取当前位置...请等待。",
                        current: "我的位置",
                        denied: "访问您的位置的权限已被拒绝。",
                    },
                    review: {
                        saved: "评论已成功保存！",
                        placeholder: "撰写评论...",
                        photo: "添加照片",
                    },
                    settings: {
                        language: "语言",
                        theme: "主题",
                        set_language: "选择语言",
                    },
                    language: {
                        dutch: "Nederlands (荷兰语)",
                        english: "English (英语)",
                        german: "Deutsch (德语)",
                        spanish: "Español (西班牙语)",
                        chinese: "中国人",
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