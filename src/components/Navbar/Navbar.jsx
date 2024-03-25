import React, { useState } from 'react'
import "./navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
    const [menu, setMenu] = useState("");
    return (
        <div className="navbar">
            <img className='logo' src={assets.logo} />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
                    <a href="#">Menu</a></li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
                    <a href="#">Mobile-App</a></li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
                    <a href="#">Contact Us</a></li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;