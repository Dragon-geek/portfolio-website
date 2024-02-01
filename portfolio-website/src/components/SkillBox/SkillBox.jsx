import React from "react";
import "./SkillBox.css";

const SkillBox = ({ iconSrc, name1, name2 }) => {
    return (
        <div className="overlap-group">
            <div className="Header">Skills</div>
            <img className="Skill-Icon" alt="Skill-Icon" src={iconSrc} />
            <div className="Skill-Name">
                <div className="name">{name1}</div>
                <div className="name">{name2}</div>
            </div>
        </div>
    );
};

export default SkillBox;
