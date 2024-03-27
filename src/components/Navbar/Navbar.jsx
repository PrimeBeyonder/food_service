import React, { useState } from 'react'
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';


const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("");
    return (
        <div className="navbar">
            <Link to="/">
                <img className='logo' src={assets.logo} />
            </Link>
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
                    <a href="#explore-menu">Menu</a></li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
                    <a href="#download">Mobile-App</a></li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
                    <a href="#footer">Contact Us</a></li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} />
                    </Link>
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;