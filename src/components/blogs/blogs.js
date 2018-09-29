import React from 'react';

import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';

import './blog.css';


const mapStateToProps = (state) => ({
    ...state
});
class MyBlogs extends React.Component {
    handleBlogClick(e) {
        console.log(e);
    }
    render() {
        return (
            <div className="blog-wrapper"> 
             <iframe title="my-blogs" className="blog-iframe" src="https://larklearning.blogspot.com/" onClick={this.handleBlogClick}></iframe>
                {
                    
                    // <iframe title="my-blogs" className="blog-iframe" src="https://medium.com/@akwebengineer" onClick={this.handleBlogClick}></iframe>
                } 
            </div >
        )
    }
    componentDidMount() {
        const { dispatch } = this.props;
        const URL = 'blog';
        dispatch(actionCreators.navigate(URL));
    }
}


export default connect(mapStateToProps)(MyBlogs);