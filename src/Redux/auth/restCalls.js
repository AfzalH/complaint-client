import axios from 'axios';
import moment from 'moment';
import { call, put } from 'redux-saga/effects';
import { loginUserErrorAction, loginUserSuccessAction } from 'Redux/auth/actions';
import { showErrorAction } from 'Redux/notification/actions';

export function* loginSuccess({ payload }) {
    payload.user.expires_at = moment().add(payload.user.expires_in, 's').toISOString();
    localStorage.setItem('currentToken', JSON.stringify(payload.user));
    yield payload.history.push('/');
}

export function* login({ payload }) {
    try {
        const response = yield call(axios.post, '/auth', {
            email: payload.user.email,
            password: payload.user.password
        });
        yield put(loginUserSuccessAction(response.data, payload.history));
    } catch (error) {
        yield put(showErrorAction(error));
        yield put(loginUserErrorAction());
    }
}

export function* logout() {
    // const token = JSON.parse(localStorage.getItem('currentToken'));
    yield localStorage.removeItem('currentToken');
    // try {
    //     yield call(axios.get, '/logout', {
    //         headers: { Authorization: 'Bearer ' + token.access_token }
    //     });
    // } catch (e) {
    //     console.log(e);
    // }
}
