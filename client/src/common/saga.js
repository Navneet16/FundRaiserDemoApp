import { all, call } from "redux-saga/effects";
import { fetchProjects } from './fetchProjects/saga';
import {fetchTopLiked} from './fetchTopLiked/saga'
import {fetchFeaturedProjects} from './fetchFeaturedCategory/saga'
import {registerUser} from './user/saga'
import {Project} from './submitProject/saga'

export default function* rootSaga(){
    yield all([
        call(fetchProjects),
        call(fetchTopLiked),
        call(fetchFeaturedProjects),
        call(registerUser),
        call(Project)
    ])
}