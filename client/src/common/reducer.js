import { combineReducers } from 'redux';
import projectInfo from './fetchProjects/reducer';
import topLikedProjects from './fetchTopLiked/reducer'
import featuredCategory from './fetchFeaturedCategory/reducer'
import User from './user/reducer'


const rootReducer = combineReducers({ projectInfo , topLikedProjects , featuredCategory, User });

export default rootReducer;
