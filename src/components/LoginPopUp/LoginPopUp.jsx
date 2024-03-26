import React, { useState } from 'react';
import "./LoginPopUp.css";
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin, showLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up");
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Name' required />}

                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-conditon'>

                    <span style={{
                        marginLeft: "10px",
                    }}>Remember Me </span><input style={{
                        marginLeft: "10px",
                    }} type="checkbox" required />
                </div>
                {currentState === "Login" ? <p>Create New Account? <span
                    style={{
                        marginLeft: "12px",
                        cursor: "pointer",
                        color: "tomato",
                    }}
                    onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> : <p>Already Have An Account? <span
                        style={{
                            marginLeft: "4px",
                            cursor: "pointer",
                            color: "tomato",
                        }}
                        onClick={() => setCurrentState("Login")}>LoginHere</span></p>}


            </form>
        </div>
    )
}

export default LoginPopUp