import * as types from '../types';

const INITIAL_STATE_SECTION_INFO = {
    
    selectCategorySection: true,
    projectDescription: false,
    selectCountry: false

}

export default function addProjectSection(state = INITIAL_STATE_SECTION_INFO, action){
    switch (action.type) {
        case types.SET_SECTION :
         return setSection(state , action.payload)

        default:
        return state;
    }
}

function setSection(state, payload){

    if(payload === "selectCategorySection"){
        return {
            ...state,
            selectCategorySection: true,
            projectDescription: false,
            selectCountry: false
        }
    }
    if(payload === "projectDescription"){
        return {
            ...state,
            selectCategorySection: false,
            projectDescription: true,
            selectCountry: false
        }
    }
    if(payload === "selectCountry"){
        return {
            ...state,
            selectCategorySection: false,
            projectDescription: false,
            selectCountry: true
        }
    }
}
