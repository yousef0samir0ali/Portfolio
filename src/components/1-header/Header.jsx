import { useEffect, useState } from "react";
import "./header.css";
import { AnimatedSection } from "../../assets/animation/animation";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { href: "#up", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#education", key: "education" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
];

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const isArabic = i18n.language?.startsWith("ar");
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    setFixed(window.scrollY > 43);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add(theme);
      document.body.classList.remove("light");
    } else {
      document.body.classList.add(theme);
      document.body.classList.remove("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  return (
    <header className={`flex ${fixed ? "fixed" : ""}`}>
      <button className="icon-menu menu" aria-label={t("openMenu")} onClick={() => setShowModal(true)} />
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" aria-label={t("closeMenu")} onClick={() => setShowModal(false)} />
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a onClick={() => setShowModal(false)} href={link.href}>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div />
      <AnimatedSection>
        <nav>
          <ul className="flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{t(link.key)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </AnimatedSection>
      <div className="header-actions flex">
        <button
          className="lang flex"
          aria-label={t("switchLanguage")}
          onClick={() => i18n.changeLanguage(isArabic ? "en" : "ar")}
        >
          {isArabic ? "EN" : "ع"}
        </button>
        <button
          className="mode flex"
          aria-label={t("switchTheme")}
          onClick={() => {
            localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
            setTheme(localStorage.getItem("currentMode"));
          }}
        >
          <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
        </button>
      </div>
    </header>
  );
}
