import React from "react";
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-page">
            <div className="hero-content">
                <h1>ADIZERO SL</h1>
                <p>When it comes to achieving your goals, every second counts.
                <br/>From training to race day, powerful performances call for high-tech
                <br/>gear that's optimised for speed. Introducing the latest range of lightweight
                <br/>running staples that help you to push beyond your limits without distraction.</p>
                <div className="hero-buttons">
                    <button>SHOP NOW</button>
                    <button>ADD TO CART</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52eda33c874e48aea1c11149d24c09d7_9366/ADIZERO_SL_Turquoise_ID6923_HM20.jpg" alt="hero-image"></img>
            </div>
        </div>
    );
};

export default Hero;