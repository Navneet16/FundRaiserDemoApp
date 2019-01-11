import { all, call } from "redux-saga/effects";
import { fetchProjects } from './fetchProjects/saga';
import {fetchTopLiked} from './fetchTopLiked/saga'

export default function* rootSaga(){
    yield all([
        call(fetchProjects),
        call(fetchTopLiked)
    ])
}