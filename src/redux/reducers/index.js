import {combineReducers} from 'redux';

import {menuToggleReducer} from './menuToggleReducer';
import {loadTOCReducer} from './loadTOCReducer';

const appReducer = combineReducers({
    menuToggleReducer: menuToggleReducer,
    loadTOCReducer: loadTOCReducer
});

export default appReducer;