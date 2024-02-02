import React from "react";
import "./ProjectBox.css";

const ProjectBox = ({ imageSrc, projectNum, projectName, client, date }) => {
    return (
        <div className="Project-box">
            <div className="Project-text-container">
                <div className="Project-Num">{projectNum}</div>
                <div className="Project-details">
                    <div className="Project-Name">{projectName}</div>
                    <div className="Project-Client">{client}</div>
                </div>
                <div className="Project-Date">{date}</div>
            </div>
            <div className="Project-img">
                <img className="Project-Image" alt="Project-Image" src={imageSrc} />
            </div>
        </div>
    );
};

export default ProjectBox;
