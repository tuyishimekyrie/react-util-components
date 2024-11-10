// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import kiny from "../locales/kiny.json";

i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      kiny: { translation: kiny },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React handles escaping by default
    },
  });

export default i18n;
