import * as types from '../types';

const INITIAL_STATE_USER_INFO = {
    
    loginStatus : null,
    userName : null,
    userEmail : null,
    Messages : null,
    activity : null,
    backedProjects : null,
    myProjects : null
}

export default function User(state = INITIAL_STATE_USER_INFO, action){
    switch (action.type) {
        case types.CHANGE_USER_STATE :
         return setUserState(state , action.payload)
        default:
        return state;
    }
}

function setUserState(state, payload){
    return {
        ...state,
        loginStatus : payload.status
    }
}