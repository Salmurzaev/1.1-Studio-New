import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_WORDS, SET_WORDS } from '../types/types';

const fetchWords = (word) => {
  return axios.post('/search', { word }).then(res => res.data.word)
  // return axios.post('/search', {word}).then(res=>console.log(res.data, 'resData'))
}

function* wordsSagaWorker(action) {
  try {
    const words = yield call(fetchWords, action.payload);
    console.log(action, 'words')
     yield put({type: SET_WORDS, payload: words}); 
  } catch (e) {
     yield put({type: SET_WORDS , payload: [{id:1, word:'Err'}]});
  }
}

export function* wordsSagaWatcher() {
  yield takeEvery(GET_WORDS, wordsSagaWorker);
}