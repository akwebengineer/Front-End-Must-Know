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
                </div>
                <section className="resume-right">
                    <Profile />
                    {
                                        //     <div>
                                        //     <h3 className="resume-title">{about.intro.title}</h3>
                                        //     <span className="resume-profileImage-title"></span>
                                        // </div>
                                        // <div style={{ marginTop: "30px"}}>
                                        //     {para}
                                        // </div>
                    }
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