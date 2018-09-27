import React from 'react';
import about from '../../data/about.json';

import Drawer from '@material-ui/core/Drawer';

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
        <div>
            <div className="about-background"></div>
            <div className="about-wrapper">
                <section className="about-left">
                    <h3 className="about-title">{about.title}</h3>
                    {para}
                </section>

            </div>
        </div>
    );


}

export default AboutMe;