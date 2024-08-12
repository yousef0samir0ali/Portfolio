import { useState } from "react";
import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header id="up" className="flex ">
      <button className="icon-menu menu" onClick={() => setShowModal(true)} />
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" onClick={() => setShowModal(false)} />
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
      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>
    </header>
  );
}
