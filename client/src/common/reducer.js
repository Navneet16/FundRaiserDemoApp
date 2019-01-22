import { combineReducers } from 'redux';
import projectInfo from './fetchProjects/reducer';
import topLikedProjects from './fetchTopLiked/reducer'
import featuredCategory from './fetchFeaturedCategory/reducer'
import User from './user/reducer'
import addProjectSection from './section/setSection'
import Project from './submitProject/reducer'


const rootReducer = combineReducers({ projectInfo , topLikedProjects , featuredCategory, User , addProjectSection , Project });

export default rootReducer;
