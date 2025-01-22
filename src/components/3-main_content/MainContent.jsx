import { AnimatePresence, motion } from "framer-motion";
import "./mainC.css";
import { myProjects } from "./ProjectsData";
import { useState } from "react";
import { AnimatedSection } from "../../animation/animation";

export default function MainContent() {
  // Set Categories
  const [category, setCategory] = useState("all Projects");
  // Get Categories
  let categories = [
    "all Projects",
    ...new Set(myProjects.flatMap((proj) => proj.catecory)),
  ];

  //Filter Projects By Ctegories
  let filterProj = myProjects.filter((proj) =>
    proj.catecory.includes(category)
  );

  let filterdProjects = category === "all Projects" ? myProjects : filterProj;
  return (
    <main className="flex">
      <AnimatedSection>
        <section className="left-section flex">
          {categories.map((button, inedex) => {
            return (
              <button
                onClick={() => setCategory(button)}
                className={category === button ? "active" : ""}
                key={inedex}
              >
                {button}
              </button>
            );
          })}
        </section>
      </AnimatedSection>
      <section className="right-section flex  ">
        <AnimatePresence>
          {filterdProjects.map((proj, index) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 5, stiffness: 50 }}
              key={index}
              className="card "
            >
              <img width={266} src={proj.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1> {proj.title} </h1>
                <p>{proj.description}</p>
                <div className=" icons flex">
                  <div style={{ position: "relative" }} className="flex">
                    <a
                      style={{ left: "2rem" }}
                      className="icon-link"
                      href={proj.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>

                    <a
                      className=" icon-github"
                      href={proj.gitHubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>

                  <a className="flex" href="#">
                    See more
                    <span className="icon-arrow-right"></span>
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
