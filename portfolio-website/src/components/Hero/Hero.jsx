import React from "react";
import "./Hero.css";
import ProfileF from "../../images/ProfileF.png";
import ProfileBG from "../../images/ProfileBG.png";
import Location from "../../images/Location.svg";
import GradCap from "../../images/GradCap.svg";
import Project_1 from "../../images/Project1.png";
import Project_2 from "../../images/Fit4All.png";
import Project_3 from "../../images/Finder.png";
import ProjectBoxCarousel from "../ProjectBoxCarousel/ProjectBoxCarousel";

const Hero = () => {
    const projects = [
        { imageSrc: Project_1, projectNum: "Project 1", projectName: "Memory Mates", client: "Datacom", date: "Oct 2023" },
        { imageSrc: Project_2, projectNum: "Project 2", projectName: "Fit 4 All", client: "Mobile App", date: "Aug 2023" },
        { imageSrc: Project_3, projectNum: "Project 3", projectName: "Travel App", client: "CSESoc", date: "May 2023" }
    ];

    return (
        <>
            <div className="profile">
                <img className="Dp" src={ProfileBG} alt="" />
                <img className="DpFace" src={ProfileF} alt="" />
                <div className="line-1">Hey there,</div>
                <div className="line-2">I'm Rahul Soni</div>
                <div className="line-3">Software Engineer</div>
                <div className="line-4">Product Designer</div>
                <div className="footer-1">
                    <img src={Location} alt="Location icon" />
                    Based in Sydney
                </div>
                <div className="footer-2">
                    <img src={GradCap} alt="Grad Cap icon" />
                    UNSW
                </div>
            </div>
            <div className="label-head">
                <div className="label-shape" />
            </div>
            <div className="label">
                <div className="text-wrapper">Portfolio</div>
            </div>
            <div className="Project-box">
                <ProjectBoxCarousel projects={projects} />
            </div>
        </>
    );
};

export default Hero;
