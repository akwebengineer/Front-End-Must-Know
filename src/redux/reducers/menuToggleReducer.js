import {actionTypes} from '../actions';

export const menuToggleReducer = function  (state={menuVisible: false}, action){
    const {type} = action;
    if(type === actionTypes.TOGGLE_MENU){
        let currentMenuState = state.menuVisible;
        return {
            ...state,
            menuVisible: !currentMenuState
        }
    }
    return state;
};