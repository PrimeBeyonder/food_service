import React from 'react';
import "./Download.css"
import { assets } from "../../assets/assets";

const Download = () => {
    return (
        <div className='download' id='download'>
            <p>For Better Experience DOwnload  <br />Tomato App</p>
            <div className="download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default Download