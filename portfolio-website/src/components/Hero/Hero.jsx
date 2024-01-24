import React from "react";
import "./Hero.css";
import Profile from "../../images/Profile.png";
import Location from "../../images/Location.svg";
import GradCap from "../../images/GradCap.svg";

const Hero = () => {
    return (
        <>
            <div className="profile">
                <img className="Dp" src={Profile} alt="" />
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
        </>
    );
};

export default Hero;
