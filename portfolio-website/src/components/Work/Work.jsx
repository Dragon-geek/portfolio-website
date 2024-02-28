import React from "react";
import "./Work.css";

import Point from "../../images/Point.svg";
import Funfox from "../../images/Funfox.png";
import Datacom from "../../images/Datacom.png";
import IndSoc from "../../images/Indsoc.png";
import CseSoc from "../../images/CseSoc.png";
import Emp from "../../images/Emp.png";

const clientData = {
    funfox: {
        info: "Funfox Info Lorem Ipsum",
        testi: "Funfox Testimonial Lorem Ipsum",
    },
    datacom: {
        info: "Datacom Info Lorem Ipsum",
        testi: "Datacom Testimonial Lorem Ipsum",
    },
    indsoc: {
        info: "IndSoc Info Lorem Ipsum",
        testi: "IndSoc Testimonial Lorem Ipsum",
    },
    csesoc: {
        info: "CseSoc Info Lorem Ipsum",
        testi: "CseSoc Testimonial Lorem Ipsum",
    },
    emp: {
        info: "Emp Info Lorem Ipsum",
        testi: "Emp Testimonial Lorem Ipsum",
    },
};

const Work = () => {
    const [selectedClient, setSelectedClient] = React.useState("funfox");

    const handleClientClick = (client) => {
        setSelectedClient(client);
    };

    return (
        <>
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
                        <div className="Work-Info">{selectedClient && clientData[selectedClient].info}</div>
                        <div className="Work-Testi">{selectedClient && clientData[selectedClient].testi}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
