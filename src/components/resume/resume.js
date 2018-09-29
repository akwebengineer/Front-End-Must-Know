import React from 'react';
// import about from '../../data/resume.json';
import Profile from './profile';

import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';

import './resume.css';



const mapStateToProps = (state) => ({
    ...state
});
class AboutMe extends React.Component {
    render() {
        // const para = about.intro.content.map((p, index) => {
        //     return (
        //         <p className="resume-content-para" key={index}>
        //             {p}
        //         </p>
        //     );
        // });

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
                    <div className="social-wrapper">
                        <a href="https://www.linkedin.com/in/arvindkannan/"><div className="linkedin social"></div></a>
                        <a href="https://medium.com/@akwebengineer"><div className="medium social"></div></a>                        
                        <a href="https://larklearning.blogspot.com/"><div className="blogger social"></div></a>
                        <a href="https://twitter.com/_ArvindKannan"><div className="twitter social"></div></a>
                        <a href="https://www.youtube.com/channel/UCWVf3c0JrX9sgQAr43GqJTQ/featured?view_as=subscriber"><div className="youtube social"></div></a>                                        
                    </div>
                    <div className="social-wrapper">
                        <div className="mailto">
                            akwebengineer@gmail.com
                        </div>
                    </div>
                </div>
                
                <section className="resume-right">
                    <Profile />                    
                </section>

            </div>
        );
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const URL = 'resume';
        dispatch(actionCreators.navigate(URL));
    }


}

export default connect(mapStateToProps)(AboutMe);