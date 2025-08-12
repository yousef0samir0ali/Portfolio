import { AnimatedSection } from '../../assets/animation/animation';
import './eduction.css';

export default function Education() {
  return (
    <AnimatedSection>
      <div className="boxes-container">
        <div className="box-container-wrapper">
          <h3 className="box-container-title">Education</h3>
          <div className="box-container">
            <div className="box">
              <div className="box-year">
                <span className="icon-calendar"></span>
                March 2019 - March 2023
              </div>
              <h4 className="box-title">Bachelor’s Degree in Software Engineering</h4>
              <div className="box-address">Latakia University – Syria</div>
              <p className="box-description">
                Graduated with a Bachelor’s degree in Informatics Engineering, specializing in Software and Information
                Systems. Gained strong skills in programming, system analysis and design, databases, teamwork, and
                problem-solving.
              </p>
            </div>
            <div className="box">
              <div className="box-year">
                <span className="icon-calendar"></span>August 2023 - Present
              </div>
              <h4 className="box-title">Master’s Degree of Web Science </h4>
              <div className="box-address"> Syrian Virtual University – Syria</div>
              <p className="box-description">
                Currently pursuing a Master’s Degree in Web Science. The program focuses on modern web technologies,
                enhancing both my academic knowledge and practical skills in web development and information analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="box-container-wrapper">
          <h3 className="box-container-title">Experience</h3>
          <div className="box-container">
            <div className="box">
              <div className="box-year">
                <span className="icon-calendar"></span>
                March 2024 - Present
              </div>
              <h4 className="box-title">View Programming Company || Front-End Developer </h4>
              <p className="box-description">
                • Developed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS. •
                Collaborated with backend developers to integrate RESTful APIs and ensure smooth data flow.
                <br />
                • Improved application performance by implementing code-splitting, lazy loading, and state management
                optimization using Redux Toolkit.
                <br />
                • Translated Figma/UI designs into pixel-perfect, cross-browser-compatible interfaces.
                <br />
                • Worked in an Agile/Scrum environment, participating in sprint planning, daily standups, and code
                reviews.
                <br />
              </p>
            </div>
            <div className="box">
              <div className="box-year">
                <span className="icon-calendar"></span>
                February 2022 - March 2024
              </div>
              <h4 className="box-title">Freelance Front-End Developer </h4>
              <p className="box-description">
                • Built 10+ responsive apps using React.js, JavaScript, HTML, and CSS.
                <br /> • Worked with 5+ clients to deliver custom web solutions.
                <br /> • Reduced page load times by 30% through optimization techniques
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
