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
        &copy; 2023 <span>Eng.Yousef Ali</span>. All rights reserved.
      </p>
    </footer>
  );
}
