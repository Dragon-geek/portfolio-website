import React from "react";
import "./Hero.css";
import Ux from "../../images/UX.svg";
import PC from "../../images/Mobile PC.svg";
import Coding from "../../images/Coding.svg";
import Project_1 from "../../images/Project1.png";
import Project_2 from "../../images/Fit4All.png";
import Project_3 from "../../images/Finder.png";

import Profile from "../Profile/Profile";
import ProjectBoxCarousel from "../ProjectBoxCarousel/ProjectBoxCarousel";
import SkillBoxCarousel from "../SkillBoxCarousel/SkillBoxCarousel";

const Hero = () => {
    const projects = [
        { imageSrc: Project_1, projectNum: "Project 1", projectName: "Memory Mates", client: "Datacom", date: "Oct 2023" },
        { imageSrc: Project_2, projectNum: "Project 2", projectName: "Fit 4 All", client: "Mobile App", date: "Aug 2023" },
        { imageSrc: Project_3, projectNum: "Project 3", projectName: "Travel App", client: "CSESoc", date: "May 2023" }
    ];

    const skills = [
        { iconSrc: Ux, name1: "UI/UX", name2: "design" },
        { iconSrc: PC, name1: "Web", name2: "development" },
        { iconSrc: Coding, name1: "Software", name2: "development" }
    ];

    return (
        <>
            <Profile />
            <div className="label-head">
                <div className="label-shape" />
            </div>
            <div className="label">
                <div className="text-wrapper">Portfolio</div>
            </div>
            <div className="Project-box">
                <ProjectBoxCarousel projects={projects} />
            </div>
            <div className="Skill-box">
                <SkillBoxCarousel skills={skills} />
            </div>
        </>
    );
};

export default Hero;
