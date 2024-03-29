import React from "react";
import "./Hero.css";
import Ux from "../../images/UX.svg";
import PC from "../../images/Mobile PC.svg";
import Coding from "../../images/Coding.svg";
import react from "../../images/React.svg"
import Project_1 from "../../images/Project1.png";
import Project_2 from "../../images/Fit4All.png";
import Project_3 from "../../images/Finder.png";
import Project_4 from "../../images/dungeon_mania.png";
import Project_5 from "../../images/slackr.png";

import ExpBox from "../ExpBox/ExpBox";
import ActBox from "../ActBox/ActBox";

import Profile from "../Profile/Profile";
import ProjectBoxCarousel from "../ProjectBoxCarousel/ProjectBoxCarousel";
import SkillBoxCarousel from "../SkillBoxCarousel/SkillBoxCarousel";

const Hero = () => {
    const projects = [
        { imageSrc: Project_1, projectNum: "Project 1", projectName: "Memory Mates", client: "Datacom", date: "Oct 2023" },
        { imageSrc: Project_2, projectNum: "Project 2", projectName: "Fit 4 All", client: "Mobile App", date: "Aug 2023" },
        { imageSrc: Project_3, projectNum: "Project 3", projectName: "Travel App", client: "CSESoc", date: "May 2023" },
        { imageSrc: Project_4, projectNum: "Project 4", projectName: "Dungeonmania", client: "Java", date: "Oct 2022" },
        { imageSrc: Project_5, projectNum: "Project 5", projectName: "Slack Clone", client: "JavaScript", date: "Nov 2023" },
    ];

    const skills = [
        { iconSrc: Ux, name1: "UI/UX", name2: "design" },
        { iconSrc: PC, name1: "Web", name2: "development" },
        { iconSrc: Coding, name1: "Software", name2: "development" },
        { iconSrc: react, name1: "React", name2: "developer" }
    ];

    return (
        <section id="hero">
            <div className="container">
                <div className="small-Profile">
                    <Profile />
                </div>

                <div className="grid-container">
                    <div className="Profile">
                        <Profile />
                    </div>

                    <div className="Portfolio">
                        <div className="Heading">
                            <div className="text-wrapper">Portfolio</div>
                        </div>

                        <div className="Projects">
                            <ProjectBoxCarousel projects={projects} />
                        </div>

                        <div className="Skills">
                            <SkillBoxCarousel skills={skills} />
                        </div>

                        <div className="Bottom">
                            <div className="Exp">
                                <ExpBox />
                            </div>

                            <div className="Activity">
                                <ActBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
