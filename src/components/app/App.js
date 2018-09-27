import React, { Component } from 'react';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import appReducer from '../../redux/reducers';


//React router imports
import {
  BrowserRouter as Router,
  Route,  
  Switch,
  Redirect
} from 'react-router-dom';

//Component imports
import './App.css';
import ButtonAppBar from '../materialUI/appBar'
import TOC from '../materialUI/toc'
import AboutMe from '../about/about';
import Resume from '../resume/resume';
import MyBlogs from '../blogs/blogs';

//End imports




const logger = createLogger();
const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(appReducer, middleware);

class App extends Component {
  state = {
    menuVisible: false
  }
  openNavMenu = (menuState, event) => {
    this.setState({ menuVisible: true });
  }

  closeNavMenu = (event) => {
    this.setState({ menuVisible: false });
  }

  handleNavItemClick = (event) => {
    this.closeNavMenu(event);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ButtonAppBar menuVisible={this.state.menuVisible} handleMenuClick={this.openNavMenu} />
            <div className="app-main">
{              
  // <nav className="app-nav">
  //               <TOC open={this.state.menuVisible} handleNavItemClick={this.handleNavItemClick} />
  //             </nav>
            }
              <section className="app-main-section">              
                <Route exact path='/' component={AboutMe}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/blog" component={MyBlogs}/>      
              </section>
            </div>
            <footer></footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;