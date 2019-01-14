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

export const topLiked = {
    fetchTopLikedProjects : () => {
        return { 
            type: types.SAGA_FETCH_TOP_LIKED_PROJECTS
        }
    },

    setTopLikedProjects: (payload) => {
       return {
           type : types.SET_FETCHED_TOP_LIKED_PROJECTS,
           payload : payload
       }
    }
}

export const featuredCategory = {
    fetchFeaturedCategory : () => {
        return { 
            type: types.SAGA_FETCH_FEATURED_CATEGORY_PROJECTS
        }
    },

    setFeaturedProjects: (payload) => {
       return {
           type : types.SET_FETCHED_FEATURED_CATEGORY_PROJECTS,
           payload : payload
       }
    }
}
