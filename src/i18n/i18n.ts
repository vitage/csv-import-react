import i18, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslation from "./es";
import frTranslation from "./fr";
import itTranslations from "./it";
import ruTranslations from "./ru";
const resources: Resource = {
  en: {
    translation: {},
  },
  fr: {
    translation: frTranslation,
  },
  es: {
    translation: esTranslation,
  },
  it: {
    translation: itTranslations,
  },
  ru: {
    translation: ruTranslations,
  },
};

i18.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18;
