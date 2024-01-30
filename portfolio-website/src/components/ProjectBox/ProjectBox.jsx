import React from "react";
import "./ProjectBox.css";

const ProjectBox = ({ imageSrc, projectNum, projectName, client, date }) => {
  return (
    <div className="overlap-group">
      <img className="Project-Image" alt="Project-Image" src={imageSrc} />
      <div className="Project-text">{projectNum}</div>
      <div className="div">{projectName}</div>
      <div className="Project-text-2">{client}</div>
      <div className="Project-text-3">{date}</div>
    </div>
  );
};

export default ProjectBox;
