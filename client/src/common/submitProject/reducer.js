import * as types from '../types';

const INITIAL_STATE_PROJECT_INFO = {
    
    currentProject : ''
}

export default function Project(state = INITIAL_STATE_PROJECT_INFO, action){
    switch (action.type) {
        case types.CHANGE_SET_CURRENT_PROJECT :
         return setCurrentProjectState(state , action.payload)
        default:
        return state;
    }
}

function setCurrentProjectState(state, payload){
    return {
        ...state,
        currentProject : payload 
    }
}

