import { put, takeEvery , takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';


export function* fetchProjects(){
    yield takeEvery( types.SAGA_FETCH_ART_PROJECTS, fetchArtProjects );
}

function* clearState(){
    // yield put(actions.generateMnemonic.clearResponse());
}

function* fetchArtProjects(action){
    // try{
    //     let detailETH, detailBTC , balanceETH;
    //         detailETH = yield generatePassphraseAndDetails(action.payload.importMnemonic);
    //         balanceETH = yield getEthBalance(action.payload.importMnemonic); 
    //         detailBTC = yield generateBitcoinWallet(action.payload.importMnemonic);
    //     let data = {
    //         ...detailETH,
    //         ...balanceETH,
    //         ...detailBTC
    //     }
    //     data.status ? yield put(actions.unlockAccount.response(data)) : alertify.error(`${data.message}`);
    // } catch(e){
        
    //     yield put(actions.unlockAccount.errResponse());
    // }
}