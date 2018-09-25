import {actionTypes} from '../actions';

const tocInitialState = {
    tocItems:[], 
    isLoaded: false
};

export const loadTOCReducer = (state = tocInitialState, action) => {
    let {type, payLoad} = action;
    if(type === actionTypes.LOAD_TOC) {
        return {
            ...state,
            tocItems: payLoad,
            isLoaded: true
        }
    }
    return state;
}