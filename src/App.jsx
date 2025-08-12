import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import MainContent from "./components/5-main_content/MainContent";
import Contact from "./components/6-contact/Contact";
import Footer from "./components/7-footer/Footer";
import HeadingTitle from "./components/heading-title/HeadingTitle";
import Skills from "./components/3-skills/Skills";
import Education from "./components/4-education/Education";
import ToUp from "./components/to-up/ToUp";
import "./assets/icomoon/style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <HeadingTitle title="Skills" id="skills" />
      <Skills />
      <div className="divider" id="education" />
      <HeadingTitle title="Education && Experience" />
      <Education />
      <div className="divider" id="projects" />
      <HeadingTitle title="My Projects" />
      <MainContent />
      <div className="divider" />
      <HeadingTitle title="Contact Us" id="contact" />
      <Contact />
      <div className="divider" />
      <Footer />
      <ToUp />
    </div>
  );
}

export default App;
