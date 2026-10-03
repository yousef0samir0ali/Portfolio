import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useEffect, useState } from "react";
import loadingAnimation from "./assets/animation/loading.json";
import Lottie from "lottie-react";
import I18nProvider from "./components/I18nProvider";

const savedLang = localStorage.getItem("lang") === "ar" ? "ar" : "en";
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return isLoading ? <Lottie animationData={loadingAnimation} className="animation-loading" /> : <App />;
}

createRoot(document.getElementById("root")).render(
  <I18nProvider initialLang={savedLang}>
    <Root />
  </I18nProvider>
);
