import * as types  from './types';

export const fetchProjects = {
    fetchProjects : (payload) => {
        return { 
            type: types.SAGA_FETCH_PROJECTS,
            category : payload.category
        }
    },

    setStateProjects: (payload) => {
       return {
           type : types.SET_FETCH_PROJECTS,
           payload
       }
    }
}
