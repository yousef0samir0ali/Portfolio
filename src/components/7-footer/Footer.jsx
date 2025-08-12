import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
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
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>
        Designed and developed by <span>Eng.Yousef Ali</span> &copy; 2023
      </p>
    </footer>
  );
}
