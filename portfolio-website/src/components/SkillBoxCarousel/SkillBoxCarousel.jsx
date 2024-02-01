import React, { useState, useEffect } from "react";
import SkillBox from "../SkillBox/SkillBox";
import "./SkillBoxCarousel.css";

const SkillBoxCarousel = ({ skills }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, [skills.length]);

    return (
        <div className="Skills">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`skill-box ${index === currentIndex ? "visible" : "hidden"}`}
                >
                    <SkillBox
                        iconSrc={skill.iconSrc}
                        name1={skill.name1}
                        name2={skill.name2}
                    />
                </div>
            ))}
        </div>
    );
};

export default SkillBoxCarousel;
