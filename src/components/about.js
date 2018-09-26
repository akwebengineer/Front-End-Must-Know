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

    // return (
    //     <div style={styles.aboutWrapper}>
    //         <div style={styles.imageArea}>
            
    //             <div style={styles.bgImage}>
    //                 <span style={styles.profileImage}></span>
    //             </div>
    //         </div>
    //         <h3 className="about-title">{about.title}</h3>
    //         {para}
    //     </div>
    // );

}

const styles = {
    aboutWrapper: {
        margin: '20px'
    },
    imageArea:{
        position: 'absolute',
        width: '100%',
        height: '20%'
    },
    bgImage:{
        // backgroundImage: 'url(/static/media/bgImg.jpeg)'
        width: '100%',
        height: '200px'
    },
    profileImage:{
        backgroundImage: 'url(/static/media/profileImg.jpeg)',
        width: '100px',
        height: '100px'
    }
}

export default AboutMe;