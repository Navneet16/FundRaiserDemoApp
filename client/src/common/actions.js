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

export const clearState = {
    clearProjects : (payload) => {
        return { 
            type: types.CLEAR_PROJECTS_STATE,
            payload
        }
    },
    clearFeatured : () => {
        return {
            type : types.CLEAR_FEATURED_STATE
        }
    },
    clearTopLiked : () => {
        return {
            type : types.CLEAR_TOP_LIKED_STATE
        }
    }
}

export const user = {
    changeUserState : (payload) => {
        return { 
            type: types.CHANGE_USER_STATE,
            payload
        }
    },

    setUserDetails : (payload) => {
        return{
            type : types.SET_USER_DETAILS,
            payload
        }
    }
}
export const thirdPartyLogin ={
    thirdPartyUser : (payload) => {
        return{
            type : types.SAGA_REGISTER_USER_DETAILS_THIRD_PARTY_LOGIN,
            payload
        }
    }
}
export const thirdPartylogOut ={

    thirdPartylogOut : (payload) => {
        return {
            type : types.LOGOUT_USER,
            payload
        }
    }
}
export const addProject = {
    setSection : (payload) => {
        return {
            type : types.SET_SECTION,
            payload
        }
    },
    submitProject : (payload) => {
        return {
            type : types.SUBMIT_PROJECT,
            payload
        }
    },
    setProject : (payload) => {
        return {
            type : types.SET_PROJECT,
            payload  
        }
    }
}
