import React from "react";
import './MobileNav.css';
import LinkedIn from '../../../images/LinkedIn.svg';
import GitHub from '../../../images/GitHub.svg';

import Resume from '../../../assets/Resume.pdf';

const MobileNav = ({ isOpen, toggleMenu }) => {

    const handleScroll = (sectionId) => {
        if (isOpen) toggleMenu();
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <ul>
                        <li>
                            <a onClick={() => handleScroll("hero")} className="menu-item">Home</a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("overview")} className="menu-item">Overview</a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("work")} className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("projects")} className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("contact")} className="menu-item">Contact</a>
                        </li>
                        <li>
                            <a href={Resume} download="Resume-Rahul.pdf" className="menu-item">Download CV</a>
                        </li>
                        <li className="icons">
                            <a href="https://www.linkedin.com/in/rahulsoni0700" target="_blank" rel="noopener noreferrer">
                                <img className="linkedIn menu-item" src={LinkedIn} alt="LinkedIn" />
                            </a>
                            <span>  </span>
                            <a href="https://github.com/Dragon-geek" target="_blank" rel="noopener noreferrer">
                                <img className="github menu-item" src={GitHub} alt="GitHub" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
