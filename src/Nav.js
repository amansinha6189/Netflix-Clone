import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListene("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png"
            alt="Netflix Logo"
            />

            <img
            className="nav__avatar"
            src="https://image.shutterstock.com/image-vector/smiley-vector-happy-face-260nw-408014413.jpg"
            alt="Profile Image"
            />
        </div>
    )
}

export default Nav
