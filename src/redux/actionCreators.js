import {actionTypes} from './actions';

const toggleMenu = () => {
    console.log('HERE.....');
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


export const actionCreators =  {
    toggleMenu,
    loadTOC
};