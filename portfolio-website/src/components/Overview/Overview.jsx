import React from "react";
import "./Overview.css";

import Ux from "../../images/UX.svg";
import PC from "../../images/Mobile PC.svg";
import Coding from "../../images/Coding.svg";
import react from "../../images/React.svg";

import SkillBox from "../SkillBox/SkillBox";

const Overview = () => {
    return (
        <section id="overview">
            <div className="Overview-container">
                <div className="Overview">
                    <div className="Overview-Header">Overview</div>
                    <div className="Overview-text">Graduate in Software Engineering from UNSW, I excel in web development, with technical and innovative skills. I have in-depth knowledge of programming languages and development tools, seeking a position in a growth-oriented company that values my analytical and technical skills and help me contribute to its development while concurrently aiding my personal growth.</div>
                    <div className="Skill-container">
                        <SkillBox
                            iconSrc={Ux}
                            name1="UX/UI"
                            name2="design"
                        />
                        <SkillBox
                            iconSrc={PC}
                            name1="Web"
                            name2="development"
                        />
                        <SkillBox
                            iconSrc={Coding}
                            name1="Software"
                            name2="development"
                        />
                        <SkillBox
                            iconSrc={react}
                            name1="React"
                            name2="developer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
