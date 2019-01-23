import { put, takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import axios from 'axios'


export function* Project(){
    yield takeLatest( types.SUBMIT_PROJECT, submit );
}
function* submit(action){
    try{
          var submitProj = yield submitProject(action.payload);
          submitProj.status ? yield put(actions.addProject.setProject({projectId :submitProj.data })) : alert(`${submitProj.message}`);
    } catch(e){
        
        // yield put(actions.unlockAccount.errResponse());
    }
}



function submitProject(project) 
    {
        console.log(project)
        return new Promise((resolve, reject)=>{axios.post(`http://localhost:3001/api/submitProject`,{
            email : project.email,
            token : project.token,
            description : project.description,
            category : project.category,
            subCategory : project.subCategory,
            country : project.country,
            time : Date.now()
      }).then(( info, err) => {
        if(err) reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else if(!info.data.status)  reject({status: false, message : "Some error occured while fetching transaction history. Please try again later." });
        else  resolve({status: true , data : info.data.data});
    })
  }
)
}
