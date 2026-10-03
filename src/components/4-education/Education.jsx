import { useTranslation } from "react-i18next";
import { AnimatedSection } from "../../assets/animation/animation";
import "./eduction.css";

export default function Education() {
  const { t } = useTranslation("education");
  const items = t("items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <AnimatedSection>
      <div className="boxes-container single">
        <div className="box-container-wrapper">
          <div className="box-container">
            {list.map((item) => (
              <div className="box" key={item.title}>
                {item.date && (
                  <div className="box-year">
                    <span className="icon-calendar"></span>
                    {item.date}
                  </div>
                )}
                <h4 className="box-title">{item.title}</h4>
                {item.address && <div className="box-address">{item.address}</div>}
                <p className="box-description">
                  {item.lines
                    ? item.lines.map((line) => (
                        <span key={line}>
                          • {line}
                          <br />
                        </span>
                      ))
                    : (
                        <>
                          {item.description}
                          {item.extra && (
                            <>
                              <br />
                              {item.extra}
                            </>
                          )}
                        </>
                      )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
