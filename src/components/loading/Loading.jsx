import "./loading.css";
import { useTranslation } from "react-i18next";

export default function Loading() {
  const { t } = useTranslation();

  return (
    <div className="loading-container">
      <div className="circle"></div>
      <div className="text">{t("loading")}</div>
    </div>
  );
}
