import * as types from '../types';


const INITIAL_STATE_PROJECT_INFO = {

   arts : []
}

export default function projectInfo(state = INITIAL_STATE_PROJECT_INFO, action){
    switch (action.type) {
        case types.SET_FETCH_ART_PROJECTS:
        return setArtProject(state, action.payload);
        default:
        return state;
    }
}

function setArtProject(state, payload){
    return {
        ...state,
        arts : payload
    }
}