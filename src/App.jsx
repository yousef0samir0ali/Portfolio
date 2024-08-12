import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import MainContent from "./components/3-main_content/MainContent";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <MainContent />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up">
        <button className="scroll-to-top icon-keyboard_arrow_up flex"></button>
      </a>
    </div>
  );
}

export default App;
