import { actionTypes } from '../actions';


const navigationInitialState = {
    currentURIPath: '/',
    currentActiveNavTab: 0
};
export const navigateReducer = (state = navigationInitialState, action) => {

    if (action.type === actionTypes.NAVIGATE) {
        // const history = action.payload.history;
        // history.push(`/${action.payload.URL}`); //Used for programmatic triggering of URL change
        console.log("action.payload.activeTab");
        console.log(action.payload.activeTab);
        return {
            ...state,
            currentURIPath: action.payload.URL,
            currentActiveNavTab: action.payload.activeTab
        }
     }
    return state;
}