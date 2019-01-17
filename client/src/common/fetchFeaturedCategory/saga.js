import { put, takeEvery } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import axios from 'axios'


export function* fetchFeaturedProjects(){
    yield takeEvery( types.SAGA_FETCH_FEATURED_CATEGORY_PROJECTS, fetchFeaturedProject );
}

function* fetchFeaturedProject(action){
    try{
          var projects = yield fetchApi();

          projects.status ? yield put(actions.featuredCategory.setFeaturedProjects(projects)) : alert(`${projects.message}`);
    } catch(e){
        
        // yield put(actions.unlockAccount.errResponse());
    }
}

function fetchApi() 
    {
        return new Promise((resolve, reject)=>{axios.get(`http://localhost:3001/api/fetchFeatured`).then(( info, err) => {
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else resolve({status: info.data.status , categoryType :info.data.category, data : info.data.data});
    })}
)}