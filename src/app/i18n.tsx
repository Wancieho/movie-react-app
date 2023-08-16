import en from "./translations/en.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
