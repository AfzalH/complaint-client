import { all, fork, takeEvery } from 'redux-saga/effects';
import types from 'Constants/actionTypes';
import { doUpdate, doGet } from 'Redux/rest/restCalls';

function* watchUpdate() {
    yield takeEvery(types.update, doUpdate);
}
function* watchGet() {
    yield takeEvery(types.get, doGet);
}

export default function* rootSaga() {
    yield all([fork(watchUpdate), fork(watchGet)]);
}
