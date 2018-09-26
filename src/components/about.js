import React from 'react';
import about from '../data/about.json';

//Temporary workaround for styles
import './about.css';

const AboutMe = () => {
    const para = about.content.map((p, index) => {
        return (
            <p className="about-content-para" key={index}>
                {p}
            </p>
        );
    });

    return (
        <div className="about-wrapper">
            <div className="about-image-area">

                <div className="about-bgImage">
                    <span className="about-profileImage"></span>
                </div>
            </div>
            <h3 className="about-title">{about.title}</h3>
            {para}
        </div>
    );


}

export default AboutMe;