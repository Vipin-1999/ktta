import React from 'react';
import '../../css/style.css';
import banner from '../../images/banner_1.jpg';

const Banner = ({ text }) => {
    return (
        <div
            id="index-banner"
            className="parallax-container"
            style={{ minHeight: '500px' }}
        >
            <div className="section no-pad-bot">
                <div className="container">
                    <br />
                    <br />
                    <h1 className="header center teal-text">{text}</h1>
                    <br />
                    <br />
                </div>
            </div>
            <div class="parallax">
                <img src={banner} alt="Unsplashed background img 1" />
            </div>
        </div>
    );
};

export default Banner;
