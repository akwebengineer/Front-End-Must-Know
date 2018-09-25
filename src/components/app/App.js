import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';


//Component Imports
import './App.css';
import ButtonAppBar from '../appBar/appBar'
import TOC from '../toc/toc'
import CodeIcon from '@material-ui/icons/Code';


//Redux
import appReducer from '../../redux/reducers';

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
        <div className="App">
          <ButtonAppBar menuVisible={this.state.menuVisible} handleMenuClick={this.openNavMenu} />
          <div className="app-main">
            <nav >
              <TOC className="app-nav" open={this.state.menuVisible} handleNavItemClick={this.handleNavItemClick} />
            </nav>
            <section>
              <span className="app-place-holder">
                <CodeIcon />
              </span>
            </section>
          </div>
          <footer></footer>
        </div>
      </Provider> 
    );
  }
}

export default App;