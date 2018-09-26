import {actionTypes} from '../actions';

export const menuToggleReducer = function  (state={menuVisible: true}, action){
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