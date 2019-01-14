import * as types from '../types';


const INITIAL_STATE_PROJECT_INFO = {

    featuredCategory : []
}
export default function featuredCategory(state = INITIAL_STATE_PROJECT_INFO, action){
    switch (action.type) {
        case types.SET_FETCHED_FEATURED_CATEGORY_PROJECTS:
        return setFeaturedProject(state, action.payload);
        default:
        return state;
    }
}

function setFeaturedProject(state, payload){
    return {
        ...state,
        featuredCategory : payload.data
    }
}