import { actionTypes } from '../actions';


const navigationInitialState = {
    currentURIPath: '/'
};
export const navigateReducer = (state = navigationInitialState, action) => {

    if (action.type === actionTypes.NAVIGATE) {
        return {
            ...state,
            currentURIPath: action.payload.URL
        }
     }
    return state;
}