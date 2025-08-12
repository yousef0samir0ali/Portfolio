import "./to-up.css";
import { useEffect, useState } from "react";

export default function ToUp() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <a href="#up">
      <button style={{ opacity: scroll ? 1 : 0 }} className="scroll-to-top icon-keyboard_arrow_up flex"></button>
    </a>
  );
}
