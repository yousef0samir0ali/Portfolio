import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { categoryLabel, localizeProject } from "../../data/localizeProject";
import { RepoIcon, repoKind } from "./SourceRepo";

export default function ProjectDialog({ project, onClose }) {
  const { t } = useTranslation("projects");
  const copy = project ? localizeProject(t, project) : null;
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-overlay" onClick={onClose}>
      <div
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="icon-close project-dialog-close" aria-label={t("close")} onClick={onClose} />

        <img className="project-dialog-img" src={copy.imgPath} alt={copy.title} />

        <div className="project-dialog-body">
          <div className="project-dialog-head flex">
            <h2 id="project-dialog-title">{copy.title}</h2>
            <div className="project-dialog-tags flex">
              {copy.categories.map((cat) => (
                <span key={cat}>{categoryLabel(t, cat)}</span>
              ))}
            </div>
          </div>

          <p className="project-dialog-desc">{copy.description}</p>

          {copy.features?.length > 0 && (
            <>
              <h3>{t("keyFeatures")}</h3>
              <ul className="project-dialog-features">
                {copy.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {copy.subDescription && (
            <>
              <h3>{t("techStack")}</h3>
              <p className="project-dialog-stack">{copy.subDescription}</p>
            </>
          )}

          <div className="project-dialog-links flex">
            {copy.gitHubURL && (
              <a href={copy.gitHubURL} target="_blank" rel="noopener noreferrer" className="flex">
                <RepoIcon url={copy.gitHubURL} />
                <span>{t(repoKind(copy.gitHubURL))}</span>
              </a>
            )}
            {copy.liveURL && (
              <a href={copy.liveURL.trim()} target="_blank" rel="noopener noreferrer" className="flex">
                <span className="icon-link"></span>
                <span>{t("liveDemo")}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
