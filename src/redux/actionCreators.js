import {actionTypes} from './actions';

const toggleMenu = () => {
    return {
        type: actionTypes.TOGGLE_MENU
    }
}

const loadTOC = () => {
    const payLoad = [
        {
            title: 'Javascript Tips and Tricks',
            topics: ['Closures', 'Context (this)', 'Scope', 'Memoization', 'Debouncing', 'Throttling', 'Event Loop']
        },
        {
            title: 'Algorithms and Datastructures',
            topics: ['Queue', 'Stack', 'Linked List', 'Array', 'Hash Map', 'Graph', 'Tree']
        }

    ];
    console.log(payLoad);
    return {
        type: actionTypes.LOAD_TOC,
        payLoad: payLoad
    }
}

const navigate = (URL) => {
    const action = {
        type: actionTypes.NAVIGATE,
        payload: { URL }
    }
    switch (URL) {
        case "about":
            action.payload.activeTab = 0;
            break;
        case "blog":
            action.payload.activeTab = 1;
            break;
        case "work":
            action.payload.activeTab = 2;
            break;            
        case "resume":
            action.payload.activeTab = 3;
            break;
        default:
            action.payload.activeTab = 0;
    }

    return action;
}


export const actionCreators =  {
    toggleMenu,
    loadTOC,
    navigate
};