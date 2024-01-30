import React, { useState, useEffect } from "react";
import ProjectBox from "../ProjectBox/ProjectBox";
import "./ProjectBoxCarousel.css";

const ProjectBoxCarousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, [projects.length]);

    return (
        <div className="Projects">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-box ${index === currentIndex ? "visible" : "hidden"}`}
                >
                    <ProjectBox
                        imageSrc={project.imageSrc}
                        projectNum={project.projectNum}
                        projectName={project.projectName}
                        client={project.client}
                        date={project.date}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectBoxCarousel;
