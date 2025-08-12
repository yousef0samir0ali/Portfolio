import { AnimatePresence, motion } from "framer-motion";
import "./mainC.css";
import { myProjects } from "../../data/ProjectsData";
import { useState } from "react";
import { AnimatedSection } from "../../assets/animation/animation";

export default function MainContent() {
  // Set Categories
  const [category, setCategory] = useState("all Projects");
  // Get Categories
  let categories = ["all Projects", ...new Set(myProjects.flatMap((proj) => proj.categories))];

  //Filter Projects By categories
  let filterProj = myProjects.filter((proj) => proj.categories.includes(category));

  let filteredProjects = category === "all Projects" ? myProjects : filterProj;
  return (
    <main className="flex">
      <AnimatedSection>
        <section className="left-section flex">
          {categories.map((button, index) => {
            return (
              <button onClick={() => setCategory(button)} className={category === button ? "active" : ""} key={index}>
                {button}
              </button>
            );
          })}
        </section>
      </AnimatedSection>
      <section className="right-section flex  ">
        <AnimatePresence>
          {filteredProjects.map((proj, index) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 5, stiffness: 50 }}
              key={index}
              className="card "
            >
              <img src={proj.imgPath} alt={proj.title} loading="lazy" />
              <div style={{ width: "266px" }} className="box">
                <h1> {proj.title} </h1>
                <p>
                  {proj.description} <br />
                  <br />
                  {proj.subDescription}
                </p>
                <div className="icons flex">
                  <a href={proj.gitHubURL} target="_blank" rel="noopener noreferrer" className="icon flex">
                    <span className="icon-github"></span>
                    <span>GitHub</span>
                  </a>
                  <a href={proj.liveURL} target="_blank" rel="noopener noreferrer" className="icon flex">
                    <span className="icon-link"></span>
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
