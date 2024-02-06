import React from "react";
import "./ActBox.css";

const ActBox = () => {
    return (
        <div className="Act-box">
            <div className="Act-Header">Activities</div>
            <div className="Act-1 Activities">
                <div className="Act-Logo">• UNSW Innovator Pro</div>
                <div>Aug - Sep 2022</div>
            </div>
            <div className="Act-2 Activities">
                <div className="Act-Logo">• Media Director</div>
                <div>Feb - Dec 2023</div>
            </div>
            <div className="Act-3 Activities">
                <div className="Act-Logo">• Python Bootcamp</div>
                <div>Jun - July 2020</div>
            </div>
        </div>
    );
};

export default ActBox;
