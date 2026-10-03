import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import arCommon from "./locales/ar/common.json";
import arContact from "./locales/ar/contact.json";
import arEducation from "./locales/ar/education.json";
import arExperience from "./locales/ar/experience.json";
import arFooter from "./locales/ar/footer.json";
import arHeader from "./locales/ar/header.json";
import arHero from "./locales/ar/hero.json";
import arProjects from "./locales/ar/projects.json";
import enCommon from "./locales/en/common.json";
import enContact from "./locales/en/contact.json";
import enEducation from "./locales/en/education.json";
import enExperience from "./locales/en/experience.json";
import enFooter from "./locales/en/footer.json";
import enHeader from "./locales/en/header.json";
import enHero from "./locales/en/hero.json";
import enProjects from "./locales/en/projects.json";

const resources = {
  ar: {
    common: arCommon,
    header: arHeader,
    hero: arHero,
    experience: arExperience,
    education: arEducation,
    projects: arProjects,
    contact: arContact,
    footer: arFooter,
  },
  en: {
    common: enCommon,
    header: enHeader,
    hero: enHero,
    experience: enExperience,
    education: enEducation,
    projects: enProjects,
    contact: enContact,
    footer: enFooter,
  },
};

const i18nOptions = {
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],
  initImmediate: false,
  ns: ["common", "header", "hero", "experience", "education", "projects", "contact", "footer"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

export function createI18n(lng = "en") {
  const instance = i18n.createInstance();
  instance.use(initReactI18next).init({
    ...i18nOptions,
    lng,
  });
  return instance;
}

let appI18nInstance = null;

export function registerAppI18n(instance) {
  appI18nInstance = instance;
}

export function getAppI18n() {
  return appI18nInstance;
}
