import React from "react";

interface Skill {
  name: string;
  level: string;
}

const Frontend: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "Git", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "JQuery", level: "Intermediate" },
    { name: "Tailwind", level: "Intermediate" },
    { name: "Next Js", level: "Intermediate" },
    { name: "React Native", level: "Basic" },
  ];

  const SkillItem: React.FC<Skill> = ({ name, level }) => (
    <div className="skills__data">
      <i className="bi bi-patch-check"></i>
      <div>
        <h3 className="skills__name">{name}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.slice(0, 5).map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
        <div className="skills__group">
          {skills.slice(5).map((skill, index) => (
            <SkillItem key={index + 5} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
