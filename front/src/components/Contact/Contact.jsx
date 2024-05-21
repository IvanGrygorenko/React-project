import React, { useState } from "react";
import "./Contact.scss";
import { FacebookOutlined } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Google } from "@mui/icons-material";

export default function Contact() {
    const [emailText, setEmailText] = useState('');
    const handleSendEmail = () => {
        const subject = "Знайдено баг на сайті PobutShop";
        const emailAddress = "vanua.the.best3@ukr.net";
        const emailBody = `Повідомлення про баг:\n${emailText}`;
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className="contact">
            <div className="wrapper">
                <span>Знайшов баг - повідом нас:</span>
                <div className="mail">
                    <input type="text" placeholder="Введіть ваш e-mail..." value={emailText} onChange={e => setEmailText(e.target.value)} />
                    <button onClick={handleSendEmail}>Надіслати</button>
                </div>
                <div className="icons">
                    <div className="icons">
                        <a href="https://www.facebook.com">
                            <FacebookOutlined />
                        </a>
                        <a href="https://www.instagram.com">
                            <Instagram />
                        </a>
                        <a href="https://twitter.com">
                            <Twitter />
                        </a>
                        <a href="https://www.google.com">
                            <Google />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}