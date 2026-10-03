import { createContext, useContext, useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";

import { createI18n, registerAppI18n } from "../i18n";

const I18nContext = createContext(null);

export function useI18nInstance() {
  const instance = useContext(I18nContext);

  if (!instance) {
    throw new Error("useI18nInstance must be used within I18nProvider");
  }

  return instance;
}

export default function I18nProvider({ children, initialLang = "en" }) {
  const i18n = useMemo(() => createI18n(initialLang), [initialLang]);

  useEffect(() => {
    registerAppI18n(i18n);
  }, [i18n]);

  useEffect(() => {
    const syncDocument = () => {
      const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
      document.documentElement.setAttribute("dir", i18n.dir(lang));
      document.documentElement.setAttribute("lang", lang);
      localStorage.setItem("lang", lang);
      document.title = i18n.t("metaTitle");
    };

    syncDocument();
    i18n.on("languageChanged", syncDocument);

    return () => {
      i18n.off("languageChanged", syncDocument);
    };
  }, [i18n]);

  return (
    <I18nContext.Provider value={i18n}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </I18nContext.Provider>
  );
}
