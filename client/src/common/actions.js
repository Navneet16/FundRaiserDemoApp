import * as types  from './types';

export const fetchProjects = {
    fetchProjectsArts : () => {
        return { 
            type: types.SAGA_FETCH_ART_PROJECTS,
        }
    }
}
