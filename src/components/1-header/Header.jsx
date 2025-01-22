import { useEffect, useState } from "react";
import "./header.css";
import { AnimatedSection } from "../../animation/animation";
export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const [theem, setTheem] = useState(
    localStorage.getItem("curentMode") ?? "dark"
  );
  useEffect(() => {
    if (theem === "dark") {
      document.body.classList.add(theem);
      document.body.classList.remove("light");
    } else {
      document.body.classList.add(theem);
      document.body.classList.remove("dark");
    }
  }, [theem]);

  return (
    <header id="up" className="flex ">
      <button className="icon-menu menu" onClick={() => setShowModal(true)} />
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
      <div />
      <AnimatedSection>
        <nav>
          <ul className="flex">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </AnimatedSection>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "curentMode",
            theem === "dark" ? "light" : "dark"
          );
          setTheem(localStorage.getItem("curentMode"));
        }}
      >
        <span className={theem === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
    </header>
  );
}
