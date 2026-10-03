import { useTranslation } from "react-i18next";
import { AnimatedSection } from "../../assets/animation/animation";
import "../4-education/eduction.css";

export default function Experience() {
  const { t } = useTranslation("experience");
  const items = t("items", { returnObjects: true });
  const experiences = Array.isArray(items) ? items : [];

  return (
    <AnimatedSection>
      <div className="boxes-container single">
        <div className="box-container-wrapper">
          <div className="box-container">
            {experiences.map((exp) => (
              <div className="box" key={exp.company}>
                <div className="box-year">
                  <span className="icon-calendar"></span>
                  {exp.date}
                </div>
                <h4 className="box-title">
                  {exp.company} || {exp.role}
                </h4>
                <div className="box-address">{exp.location}</div>
                <p className="box-description">
                  {exp.points.map((point) => (
                    <span key={point}>
                      • {point}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
