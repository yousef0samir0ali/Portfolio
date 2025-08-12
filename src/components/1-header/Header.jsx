import { useEffect, useState } from "react";
import "./header.css";
import { AnimatedSection } from "../../assets/animation/animation";
export default function Header() {
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
      <button className="icon-menu menu" onClick={() => setShowModal(true)} />
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" onClick={() => setShowModal(false)} />
            </li>
            <li>
              <a onClick={() => setShowModal(false)} href="#up">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setShowModal(false)} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setShowModal(false)} href="#education">
                Education
              </a>
            </li>
            <li>
              <a onClick={() => setShowModal(false)} href="#education">
                Experience
              </a>
            </li>
            <li>
              <a onClick={() => setShowModal(false)} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setShowModal(false)} href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
      <div />
      <AnimatedSection>
        <nav>
          <ul className="flex">
            <li>
              <a href="#up">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#education">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </AnimatedSection>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
    </header>
  );
}
