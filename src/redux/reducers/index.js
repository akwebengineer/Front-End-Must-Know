import {combineReducers} from 'redux';

import {menuToggleReducer} from './menuToggleReducer';
import {loadTOCReducer} from './loadTOCReducer';
import {navigateReducer} from './navigateReducer';

const appReducer = combineReducers({
    menuToggleReducer: menuToggleReducer,
    loadTOCReducer: loadTOCReducer,
    navigateReducer: navigateReducer
});

export default appReducer;