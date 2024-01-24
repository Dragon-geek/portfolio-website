import React from "react";
import './Navbar.css';
import Logo from '../../images/logo.svg';
import Download from '../../images/Download.svg';
import LinkedIn from '../../images/LinkedIn.svg';
import GitHub from '../../images/GitHub.svg';
import Menu from '../../images/Menu.svg';
import Close from '../../images/Close.svg';

import MobileNav from "./MobileNav/MobileNav";

import ref from '../../images/ref.png';

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            {/* <img className="ref" src={ref} alt="" /> */}
            <nav className="nav-wrapper">
                <div className="nav-content">
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
                    </ul>

                    <img className="logo" src={Logo} alt="logo" />

                    <ul>
                        <li className="download-btn">
                            <a href="#" className="download-cv">Download CV</a>
                            <img className="download" src={Download} alt="download" />
                        </li>
                        <li>
                            <img className="linkedIn menu-item" src={LinkedIn} alt="LinkedIn" />
                        </li>
                        <li>
                            <img className="github menu-item" src={GitHub} alt="GitHub" />
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
