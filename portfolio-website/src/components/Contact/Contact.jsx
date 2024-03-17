import React from "react";
import "./Contact.css";

import Notification from "../../images/Notification.png";
import ContactBox from "../ContactBox/ContactBox";

const Contact = () => {
    return (
        <>
            <div className="Contact-container">
                <div className="Contact">
                    <div className="Contact-Sep">
                        <ContactBox />
                        <img src={Notification} alt="Background image" />
                    </div>
                    <div className="Footer">
                        ©2024 All Rights Reserved.<br />
                        Made with 💜 by Rahul Soni
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
