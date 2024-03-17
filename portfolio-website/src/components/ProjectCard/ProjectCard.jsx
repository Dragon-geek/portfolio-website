import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>

      <div className="project-lang-container">
        {details.lang.map((item) => (
          <div className="project-lang" key={item}>{item}</div>
        ))}
      </div>

      <ul className="project-card-list">
        {details.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
