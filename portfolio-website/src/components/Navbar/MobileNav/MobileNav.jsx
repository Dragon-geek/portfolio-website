import React from "react";
import './MobileNav.css';
import LinkedIn from '../../../images/LinkedIn.svg';
import GitHub from '../../../images/GitHub.svg';

const MobileNav = ({ isOpen, toggleMenu }) => {

    // const handleScroll = (sectionId) => {
    //     if (isOpen) toggleMenu();
    //     document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <ul>
                        <li>
                            <a href="#" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">About me</a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Download CV</a>
                        </li>
                        <li className="icons">
                            <img className="linkedIn menu-item" src={LinkedIn} alt="LinkedIn" />
                            <span>  </span>
                            <img className="github menu-item" src={GitHub} alt="GitHub" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
