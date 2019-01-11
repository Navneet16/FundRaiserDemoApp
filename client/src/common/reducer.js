import { combineReducers } from 'redux';
import projectInfo from './fetchProjects/reducer';
import topLikedProjects from './fetchTopLiked/reducer'


const rootReducer = combineReducers({ projectInfo , topLikedProjects });

export default rootReducer;
