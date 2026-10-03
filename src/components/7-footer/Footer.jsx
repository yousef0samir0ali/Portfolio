import "./footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(["footer", "header"]);

  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#up">{t("header:about")}</a>
        </li>
        <li>
          <a href="#skills">{t("header:skills")}</a>
        </li>
        <li>
          <a href="#experience">{t("header:experience")}</a>
        </li>
        <li>
          <a href="#education">{t("header:education")}</a>
        </li>
        <li>
          <a href="#projects">{t("header:projects")}</a>
        </li>
        <li>
          <a href="#contact">{t("header:contactShort")}</a>
        </li>
      </ul>
      <p>
        {t("credit")} <span>{t("name")}</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
