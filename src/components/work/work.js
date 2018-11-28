import React from 'react';

import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';

import './work.css';


const mapStateToProps = (state) => ({
    ...state
});
class MyWork extends React.Component {
    handleworkClick(e) {
        console.log(e);
    }
    render() {
        return (
            <div className="work-wrapper"> 
             <iframe title="my-works" className="work-iframe" src="https://larkcodepen.blogspot.com/" onClick={this.handleworkClick}></iframe>
                {
                    
                    // <iframe title="my-works" className="work-iframe" src="https://medium.com/@akwebengineer" onClick={this.handleworkClick}></iframe>
                } 
            </div >
        )
    }
    componentDidMount() {
        const { dispatch } = this.props;
        const URL = 'work';
        dispatch(actionCreators.navigate(URL));
    }
}


export default connect(mapStateToProps)(MyWork);