import * as types from '../types';


const INITIAL_STATE_PROJECT_INFO = {

    arts : [],
    comicsIllustration : [],
    designTech: [],
    film: [],
    foodCraft : [],
    games : [],
    music: [],
    publishing:[]
}

export default function projectInfo(state = INITIAL_STATE_PROJECT_INFO, action){
    switch (action.type) {
        case types.SET_FETCH_PROJECTS:
        return setProject(state, action.payload);
        default:
        return state;
    }
}

function setProject(state, payload){
    return {
        ...state,
        [payload.category] : payload.data.data
    }
}