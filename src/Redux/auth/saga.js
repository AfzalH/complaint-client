import { all, fork, takeEvery } from 'redux-saga/effects';
import types from 'Constants/actionTypes';
import { login, loginSuccess, logout } from 'Redux/auth/restCalls';

function* watchLoginUser() {
    yield takeEvery(types.login, login);
}

function* watchLoginSuccess() {
    yield takeEvery(types.loginSuccess, loginSuccess);
}

function* watchLogoutUser() {
    yield takeEvery(types.logout, logout);
}

export default function* rootSaga() {
    yield all([fork(watchLoginUser), fork(watchLoginSuccess), fork(watchLogoutUser)]);
}
