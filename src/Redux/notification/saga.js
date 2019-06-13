import { all, fork, takeEvery } from 'redux-saga/effects';
import types from 'Constants/actionTypes';
import { showErrorNotification } from 'Redux/notification/errorFunctions';
import { showSuccessNotification } from 'Redux/notification/successFunctions';

function* watchShowError() {
    yield takeEvery(types.showError, showErrorNotification);
}

function* watchShowSuccess() {
    yield takeEvery(types.showSuccess, showSuccessNotification);
}

export default function* rootSaga() {
    yield all([fork(watchShowError), fork(watchShowSuccess)]);
}
