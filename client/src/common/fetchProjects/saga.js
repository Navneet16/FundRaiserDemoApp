import { put, takeEvery , takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import axios from 'axios'


export function* fetchProjects(){
    yield takeLatest( types.SAGA_FETCH_PROJECTS, fetchProject );
}

function* clearState(){
    // yield put(actions.generateMnemonic.clearResponse());
}

function* fetchProject(action){
    try{
          var projects = yield fetchApi(action.category);
          projects.status ? yield put(actions.fetchProjects.setStateProjects(projects)) : alert(`${projects.message}`);
    } catch(e){
        
        // yield put(actions.unlockAccount.errResponse());
    }
}

function fetchApi( category ) 
    {
        return new Promise((resolve, reject)=>{axios.post(`http://localhost:3001/api/fetch`,{
          category : category
       }).then(( info, err) => {
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else resolve( {status: true , data : info.data , category : category});
    })}
)}