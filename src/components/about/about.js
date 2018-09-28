import React from 'react';
import about from '../../data/about.json';

import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';

import './about.css';

const mapStateToProps = (state) => (
    {
        ...state
    }
);


class AboutMe extends React.Component {
    render() {
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
                <div className="about-wrapper row">
                    <section className="about-left col-xs-12 col-sm-10 col-md-8">
                        <h3 className="about-title">{about.title}</h3>
                        {para}
                    </section>

                </div>
            </div>
        );
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const URL = 'about';
        dispatch(actionCreators.navigate(URL));
    }

    // componentDidUpdate() {
    //     const { dispatch } = this.props;
    //     const URL = 'about';
    //     dispatch(actionCreators.navigate(URL));
    // }
}

export default connect(mapStateToProps)(AboutMe);