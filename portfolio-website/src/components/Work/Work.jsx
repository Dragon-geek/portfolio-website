import React from "react";
import "./Work.css";

import Point from "../../images/Point.svg";
import Funfox from "../../images/Funfox.png";
import Datacom from "../../images/Datacom.png";
import IndSoc from "../../images/Indsoc.png";
import CseSoc from "../../images/CseSoc.png";
import Emp from "../../images/Emp.png";

const clientData = {
    datacom: {
        info: [
            "As a Project Team Member at Datacom, you played a pivotal role in improving staff-resident interactions in aged-care facilities",
            "Collaborated in a cross-functional team to devise strategies enhanced staff-resident interactions in aged-care facilities, leading to a 15% increase in resident satisfaction",
            "Spearheaded creation and presentation of an innovative solution to address project's challenge, was recognized as most impactful, improving operational efficiency by 25%",
        ],
    },
    funfox: {
        info: [
            "Developed and implemented Python scripts to streamline and automate logistics processes, resulting in a 20% improvement in efficiency",
            "Led design and implementation of a new website front-end, utilizing HTML, CSS, and JavaScript, enhanced user experience and increased site traffic by 30%",
            "Supervisor's remark - \"Fantastic job on developing the UI/UX design! Your creativity and attention to user experience truly shine through.\""
        ],
    },
    indsoc: {
        info: [
            "Contributed to the Media and Marketing team at UNSW Indian Society (Indsoc), creating numerous posters and reels, garnering appreciation from peers and leaders.",
            "Held an AHEGS recognized position, highlighting proficiency and dedication in media and marketing tasks.",
            "Received commendation from Marketing Director for exemplary dedication, leadership, and collaborative skills, showcasing the ability to work seamlessly with others.",
            "Acknowledged for exceptional skills and team spirit, with the potential to contribute significantly to any organization."
    ],
    },
    csesoc: {
        info: [
            "Engaged in a hackathon organized by the Computer Science and Engineering (CSE) Society at UNSW.",
            "Collaborated within a team to develop an app design, utilizing exceptional prototyping skills to address the provided problem statement.",
            "Demonstrated proficiency in problem-solving and innovation to meet the challenges presented during the hackathon.",
            "Gained valuable experience and insights from the hackathon, which proved beneficial for future endeavors."
        ],
    },
    emp: {
        info: [
            "Engaged in the Innovator Pro program organized by the UNSW Employability Team, focusing on enhancing entrepreneurial skills.",
            "Acquired knowledge and skills on delivering powerful pitches and presenting ideas effectively to potential investors through workshops and practical sessions.",
            "Contributed to the development of an innovative solution to address a specific problem, demonstrating creativity and problem-solving abilities.",
            "Engaged in workshops delivered by industry partners, fostering an understanding of leadership, teamwork, and the interdisciplinary nature of modern workplaces."
        ],
    },
};

const Work = () => {
    const [selectedClient, setSelectedClient] = React.useState("funfox");

    const handleClientClick = (client) => {
        setSelectedClient(client);
    };

    return (
        <section id="work">
            <div className="Work-container">
                <div className="Work">
                    <div className="Work-Header">Work Experience <span className="Work-Header-2">& Activities</span></div>
                    <div className="Work-List">
                        <div className="Points">
                            <img src={Point} alt="" />
                            <img src={Point} alt="" />
                            <img src={Point} alt="" />
                            <img src={Point} alt="" />
                            <img src={Point} alt="" />
                        </div>
                        <div className="Work-Client">
                            <div className="Client-logo" onClick={() => handleClientClick("funfox")}><img src={Funfox} alt="logo" /></div>
                            <div className="Client-logo" onClick={() => handleClientClick("datacom")}><img src={Datacom} alt="logo" /></div>
                            <div className="Client-logo" onClick={() => handleClientClick("indsoc")}><img src={IndSoc} alt="logo" /></div>
                            <div className="Client-logo" onClick={() => handleClientClick("csesoc")}><img src={CseSoc} alt="logo" /></div>
                            <div className="Client-logo" onClick={() => handleClientClick("emp")}><img src={Emp} alt="logo" /></div>
                        </div>
                        <ul className="Work-Info">
                            {selectedClient && clientData[selectedClient].info.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
