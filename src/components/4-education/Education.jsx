import { AnimatedSection } from '../../assets/animation/animation';
import './eduction.css';

export default function Education() {
  return (
    <AnimatedSection>
      <div className="boxes-container single">
        <div className="box-container-wrapper">
          <div className="box-container">
            <div className="box">
              <div className="box-year">
                <span className="icon-calendar"></span>
                Mar 2019 - Mar 2023
              </div>
              <h4 className="box-title">Bachelor Degree in Informatics Engineering (IT)</h4>
              <div className="box-address">Latakia University – Latakia, Syria</div>
              <p className="box-description">
                Major: Software Engineering.
                <br />
                Gained strong skills in programming, system analysis and design, databases, teamwork, and
                problem-solving.
              </p>
            </div>
            <div className="box">
              <h4 className="box-title">Languages</h4>
              <p className="box-description">
                • Arabic: Native Proficiency.
                <br />• English: Intermediate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
