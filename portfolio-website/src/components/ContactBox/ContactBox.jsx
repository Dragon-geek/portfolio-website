import React, { useState } from "react";
import "./ContactBox.css";

import emailjs from "emailjs-com";

const ContactBox = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        const serviceID = "service_l1t3st3";
        const templateID = "template_0llxv1j";
        const userID = "5vXB6GOlK4RR_iRkx";

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log("Email sent successfully:", response);
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(false);
    };

    return (
        <>
            <div className="ContactBox-container">
                <div className="Contact-Header-1">GET IN TOUCH</div>
                <div className="Contact-Header-2">Contact</div>
                {isSubmitted ? (
                    <div className="Email-Sent">
                        <p>Thank you for your message!</p>
                        <button onClick={resetForm}>Reset</button>
                    </div>
                ) : (
                    <form onSubmit={sendEmail}>
                        <div className="Contact-Input">
                            <p>Your Name</p>
                            <input
                                className="Name"
                                type="text"
                                placeholder="What's your name?"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="Contact-Input">
                            <p>Your Email</p>
                            <input
                                className="Email"
                                type="text"
                                placeholder="What's your email?"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="Contact-Input">
                            <p>Your Message</p>
                            <textarea
                                className="Message"
                                placeholder="What do you want to say?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                )}
            </div>
        </>
    );
};

export default ContactBox;
