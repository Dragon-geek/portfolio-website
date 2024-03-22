import React, { useRef } from "react";
import './Navbar.css';
import Logo from '../../images/logo.svg';
import Download from '../../images/Download.svg';
import LinkedIn from '../../images/LinkedIn.svg';
import GitHub from '../../images/GitHub.svg';
import Menu from '../../images/Menu.svg';
import Close from '../../images/Close.svg';
import { Link } from "react-scroll";

import Resume from '../../assets/Resume.pdf';

import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const linkRef = useRef(null);

    const handleDownloadClick = () => {
        linkRef.current.click();
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <ul>
                        <li>
                            <Link activeClass="active" to="hero" smooth spy offset={-100} className="menu-item">Home</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="overview" smooth spy offset={-80} className="menu-item">Overview</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="work" smooth spy offset={-80} className="menu-item">Work</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="projects" smooth spy offset={-80} className="menu-item">Projects</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="contact" smooth spy className="menu-item">Contact</Link>
                        </li>
                    </ul>

                    <img className="logo" src={Logo} alt="logo" />

                    <ul>
                        <li onClick={handleDownloadClick} className="download-btn">
                            <a href={Resume} download="Resume-Rahul.pdf" ref={linkRef} className="download-cv">Download CV</a>
                            <img className="download" src={Download} alt="download" />
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rahulsoni0700" target="_blank" rel="noopener noreferrer">
                                <img className="linkedIn menu-item" src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Dragon-geek" target="_blank" rel="noopener noreferrer">
                                <img className="github menu-item" src={GitHub} alt="GitHub" />
                            </a>
                        </li>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span>
                            {openMenu ? <img src={Close} /> : <img src={Menu} />}
                        </span>
                    </button>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
