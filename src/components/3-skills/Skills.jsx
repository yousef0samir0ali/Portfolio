import "./skills.css";
import { mySkills } from "../../data/SkillsData";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (node) {
      observer.observe(ref.current);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const mySkillsProgress = mySkills.filter((skill) => skill.isPrimary);

  const mySkillsCircle = mySkills.filter((skill) => !skill.isPrimary);

  return (
    <div ref={ref} className="skills">
      <div className="skill-box-progress">
        {mySkillsProgress.map((skill, index) => (
          <div key={index} className="skill-progress">
            <div className="skill-progress-name">{skill.name}</div>
            <div className="skill-progress-value">{skill.value}%</div>
            <span style={{ width: `${visible ? skill.value : 0}%` }}></span>
          </div>
        ))}
      </div>
      <div className="skill-box-circle">
        {mySkillsCircle.map((skill, index) => (
          <div key={index} className="skill-circle-wrapper">
            <div
              style={{ "--value": visible ? `${skill.value}` : 0 }}
              className={`skill-circle ${visible ? "fill" : ""} `}
            >
              <span>{skill.value}%</span>
            </div>
            <div className="skill-circle-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
