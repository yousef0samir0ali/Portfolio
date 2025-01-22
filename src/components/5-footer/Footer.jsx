import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
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
      <p>
        Designed and developed by <span>Eng.Yousef Ali</span> &copy; 2023
      </p>
    </footer>
  );
}
