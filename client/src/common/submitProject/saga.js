import { put, takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import axios from 'axios'


export function* Project(){
    yield takeLatest( types.SUBMIT_PROJECT, submit );
}
function* submit(action){
    try{
          var user = yield submitProject(action.payload);
        //   user.status ? yield put(actions.user.setUserDetails({userEmail:action.payload.userEmail , userToken : action.payload.token})) : alert(`${user.message}`);
    } catch(e){
        
        // yield put(actions.unlockAccount.errResponse());
    }
}



function submitProject(project) 
    {
        console.log(project)
        return new Promise((resolve, reject)=>{axios.post(`http://localhost:3001/api/submitProject`,{
            email : project.userEmail,
            token : project.token
        }).then(( info, err) => {
            console.log(info)
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else resolve({status: true });
    })
  }
)
}
