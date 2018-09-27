import React from 'react';
import about from '../../data/resume.json';

import Drawer from '@material-ui/core/Drawer';

import './resume.css';

const AboutMe = () => {
    const para = about.content.map((p, index) => {
        return (
            <p className="resume-content-para" key={index}>
                {p}
            </p>
        );
    });

    return (
        <div className="resume-wrapper">
{

// <Drawer variant="permanent" className="resume-left">
// <span className="resume-profileImage"></span>                
// </Drawer>
// <div className="resume-right"> 
// <h3 className="resume-title">{about.title}</h3>
// {para}
// </div>
}

    <div className="resume-left">
    <span className="resume-profileImage"></span>
</div>
            <section className="resume-right">
                <h3 className="resume-title">{about.title}</h3>
                {para}
            </section>
            
        </div>
    );


}

export default AboutMe;