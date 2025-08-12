import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useEffect, useState } from "react";
import loadingAnimation from "./assets/animation/loading.json";
import Lottie from "lottie-react";

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

createRoot(document.getElementById("root")).render(<Root />);
