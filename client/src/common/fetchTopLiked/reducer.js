import * as types from '../types';


const INITIAL_STATE_PROJECT_INFO = {

    topLiked : []
}

export default function topLikedProjects(state = INITIAL_STATE_PROJECT_INFO, action){
    switch (action.type) {
        case types.SET_FETCHED_TOP_LIKED_PROJECTS:
        return setProjects(state, action.payload);
        default:
        return state;
    }
}

function setProjects(state, payload){
    return {
        ...state,
        topLiked : payload
    }
}