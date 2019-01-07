import { combineReducers } from 'redux';
import projectInfo from './fetchProjects/reducer';


const rootReducer = combineReducers({ projectInfo });

export default rootReducer;
