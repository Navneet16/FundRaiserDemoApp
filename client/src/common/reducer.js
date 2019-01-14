import { combineReducers } from 'redux';
import projectInfo from './fetchProjects/reducer';
import topLikedProjects from './fetchTopLiked/reducer'
import featuredCategory from './fetchFeaturedCategory/reducer'


const rootReducer = combineReducers({ projectInfo , topLikedProjects , featuredCategory });

export default rootReducer;
