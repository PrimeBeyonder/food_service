import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit eaque tempora saepe necessitatibus illum quas veritatis, repellendus totam aspernatur ab corporis. Eum quas voluptate sit vel ut quia eos!</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+21-23-213-234</li>
                        <li>takuku@.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">CopyRight 2024 @ Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer