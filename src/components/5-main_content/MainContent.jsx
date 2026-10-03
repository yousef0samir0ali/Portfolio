import { AnimatePresence, motion } from "framer-motion";
import "./mainC.css";
import { myProjects } from "../../data/ProjectsData";
import { categoryLabel, localizeProject } from "../../data/localizeProject";
import { useState } from "react";
import { AnimatedSection } from "../../assets/animation/animation";
import ProjectDialog from "./ProjectDialog";
import { RepoIcon, repoKind } from "./SourceRepo";
import { useTranslation } from "react-i18next";

// Description longer than this is clamped in the card and gets a "See more" button
const MAX_CARD_TEXT = 150;

export default function MainContent() {
  const { t } = useTranslation("projects");
  // Set Categories
  const [category, setCategory] = useState("all Projects");
  // Project shown in the details dialog
  const [selectedProject, setSelectedProject] = useState(null);
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
                {categoryLabel(t, button)}
              </button>
            );
          })}
        </section>
      </AnimatedSection>
      <section className="right-section flex  ">
        <AnimatePresence>
          {filteredProjects.map((proj, index) => {
            const copy = localizeProject(t, proj);
            const fullText = `${copy.description ?? ""} ${copy.subDescription ?? ""}`;
            const hasMore = fullText.length > MAX_CARD_TEXT || copy.features?.length > 0;
            return (
              <motion.article
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 8, stiffness: 50, delay: index * 0.04 }}
                key={`${category}-${proj.id}`}
                className="card "
              >
                <img src={copy.imgPath} alt={copy.title} loading="lazy" />
                <div style={{ width: "266px" }} className="box">
                  <h1 title={copy.title}> {copy.title} </h1>
                  <p className={hasMore ? "clamp" : ""}>
                    {copy.description} <br />
                    <br />
                    {copy.subDescription}
                  </p>
                  {hasMore && (
                    <button className="see-more" onClick={() => setSelectedProject(proj)}>
                      {t("seeMore")} <span className="icon-arrow-right"></span>
                    </button>
                  )}
                  <div className="icons flex">
                    <a href={proj.gitHubURL} target="_blank" rel="noopener noreferrer" className="icon flex">
                      <RepoIcon url={proj.gitHubURL} />
                      <span>{t(repoKind(proj.gitHubURL))}</span>
                    </a>
                    <a href={proj.liveURL} target="_blank" rel="noopener noreferrer" className="icon flex">
                      <span className="icon-link"></span>
                      <span>{t("live")}</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}
