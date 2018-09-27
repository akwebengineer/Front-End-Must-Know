import { actionTypes } from '../actions';


const navigationInitialState = {
    currentURIPath: '/'
};
export const navigateReducer = (state = navigationInitialState, action) => {

    if (action.type === actionTypes.NAVIGATE) {
        const history = action.payload.history;
        history.push(`/${action.payload.URL}`);
        return {
            ...state,
            currentURIPath: action.payload.URL
        }
     }
    return state;
}