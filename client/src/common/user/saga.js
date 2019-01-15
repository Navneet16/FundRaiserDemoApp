import { put, takeEvery , takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import axios from 'axios'


export function* fetchTopLiked(){
    yield takeEvery( types.SAGA_FETCH_TOP_LIKED_PROJECTS, fetchTopLikedProjects );
}

function* clearState(){
    // yield put(actions.generateMnemonic.clearResponse());
}

function* fetchTopLikedProjects(action){
    try{
          var projects = yield fetchApi();
          projects.status ? yield put(actions.topLiked.setTopLikedProjects(projects.data.data)) : alert(`${projects.message}`);
    } catch(e){
        
        // yield put(actions.unlockAccount.errResponse());
    }
}

function fetchApi() 
    {
        return new Promise((resolve, reject)=>{axios.get(`http://localhost:3001/api/fetchTopLikedProjects`).then(( info, err) => {
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else resolve({status: true , data : info.data});
    })}
)}