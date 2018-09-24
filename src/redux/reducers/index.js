import {combineReducers} from 'redux';

import {menuToggleReducer} from './menuToggleReducer';

const appReducer = combineReducers({
    toggleMenu: menuToggleReducer
});

export default appReducer;