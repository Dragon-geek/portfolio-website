import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
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

                    <img className="logo" src="./assets/images/logo.svg" alt="logo" />

                    <ul>
                        <li>
                            <a href="#" className="menu-item">Download CV</a>
                            <img src="./assets/images/Download.svg" alt="download" />
                        </li>
                        <li>
                            <img src="./assets/images/LinkedIn.svg" alt="LinkedIn" />
                        </li>
                        <li>
                        <img src="./assets/images/GitHub.svg" alt="GitHub" />
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
