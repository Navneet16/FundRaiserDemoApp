import { fetchProjects } from './fetchProjects/saga';
import { all, call } from "redux-saga/effects";


export default function* rootSaga(){
    yield all([
        fetchProjects
    ])
}