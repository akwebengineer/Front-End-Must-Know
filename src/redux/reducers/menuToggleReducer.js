export default function(state={menuVisible: false}, action){
    if(action.type == 'TOGGLE_MENU'){
        return {
            ...state,
            menuVisible: true
        }
    }
};