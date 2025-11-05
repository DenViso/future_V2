import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uk from "./langData/ua.json";
import en from "./langData/en.json";
import ukTranslations from "./langData/ua.json";
import enTranslations from "./langData/en.json";
const savedLanguage = localStorage.getItem("language") || "uk";
const resources = {
  uk: {
    translation: uk,
  },
  en: {
    translation: en,
  },
  
};

i18next
  // .use(LanguageDetector)
  // .use(initReactI18next)
  // .init({
  //   resources,
  //   lng: 'uk', 
  //   fallbackLng: 'uk', 
  //   interpolation: {
  //     escapeValue: false,
  //   },

   .use(initReactI18next)
  .init({
    lng: savedLanguage, // 👈 використовуємо збережену мову
    fallbackLng: "uk",
    resources: {
      uk: { translation: ukTranslations },
      en: { translation: enTranslations },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
