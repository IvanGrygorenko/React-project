import React from "react";
import "./Footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Посилання</h1>
                    <span>FAQ</span>
                    <span>Stories</span>
                </div>
                <div className="item">
                    <h1>Про нас</h1>
                    <span>
                        Самовивіз із магазину "VanuaStore", доставка за адресою або у відділення"Нова Пошта" і "Meest"
                    </span>
                    <span>
                        Сертифікована техніка з офіційною гарантією від виробника.
                    </span>

                    <span>
                        Повернення товару відбувається протягом 14 днів після покупки, у відповідності із діючим законом.
                    </span>
                </div>
                <div className="item">
                    <h1>Контакти</h1>
                    <span>
                        0-682-793-669
                    </span>
                    <span>
                        0-682-793-669
                    </span>
                    <span>
                        0-682-793-669
                    </span>
                    <span>
                        Безкоштовно по Україні
                    </span>
                    <span>
                        08:00-21:00 Пн-Нд
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">POBUTSHOP</span>
                    <span className="copyright">© Copyright 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}