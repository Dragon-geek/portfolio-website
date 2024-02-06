import React from "react";
import "./ExpBox.css";

import Funfox from "../../images/Funfox.png";
import Datacom from "../../images/Datacom.png";
import Indsoc from "../../images/Indsoc.png";

const ExpBox = () => {
    return (
        <div className="Exp-box">
            <div className="Exp-Header">Experience</div>
            <div className="Exp-1 Experience">
                <div className="Exp-Logo">• <img src={Funfox} alt="logo" /></div>
                <div>May - Sep 2023</div>
            </div>
            <div className="Exp-2 Experience">
                <div className="Exp-Logo">• <img src={Datacom} alt="logo" /></div>
                <div>Sep - Dec 2023</div>
            </div>
            <div className="Exp-3 Experience">
                <div className="Exp-Logo">• <img src={Indsoc} alt="logo" /></div>
                <div>Feb - Dec 2023</div>
            </div>
        </div>
    );
};

export default ExpBox;
