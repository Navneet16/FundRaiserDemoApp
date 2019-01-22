import { put, takeLatest , takeEvery } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import axios from 'axios'


export function* registerUser(){
    yield takeLatest( types.SAGA_REGISTER_USER_DETAILS_THIRD_PARTY_LOGIN, registerUserDetails );
    yield takeLatest( types.LOGOUT_USER, logoutUser );
}
function* registerUserDetails(action){
    try{
          var user = yield fetchApi(action.payload);
          user.status ? yield put(actions.user.setUserDetails({userEmail:action.payload.userEmail , userToken : action.payload.token})) : alert(`${user.message}`);
    } catch(e){
        
        // yield put(actions.unlockAccount.errResponse());
    }
}

function* logoutUser(action){
    try {
        var userLogOut = yield signOut(action.payload)
        console.log(userLogOut)
    } catch (e) {
        console.log(e)
    }
}

function fetchApi(user) 
    {

        return new Promise((resolve, reject)=>{axios.post(`http://localhost:3001/api/thirdPartyLogin`,{
            email : user.userEmail,
            token : user.token
        }).then(( info, err) => {
            console.log(info)
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else resolve({status: true });
    })
  }
)
}

function signOut(user){
        return new Promise((resolve, reject)=>{axios.post(`http://localhost:3001/api/thirdPartyLogout`,{
            email : user.userEmail,
            token : user.token
        }).then(( info, err) => {
            console.log(info)
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else resolve({status: true });
    })
    }
    )
}