import React from 'react';
import about from '../data/about.json'

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
            <h3 className="about-title">{about.title}</h3>
            {para}
        </div>
    );

}

export default AboutMe;