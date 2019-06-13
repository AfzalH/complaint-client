import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getError, getSuccess, updateError, updateSuccess } from 'Redux/rest/actions';
import { showErrorAction, showSuccessAction } from 'Redux/notification/actions';

export function* doUpdate({ payload }) {
    try {
        const response = yield call(axios.put, payload.endPoint, payload.data);
        yield put(updateSuccess(payload.data, payload.key));
        yield put(showSuccessAction(response));
        if (payload.next) yield put(payload.next);
    } catch (error) {
        yield put(updateError(payload.data, payload.key));
        yield put(showErrorAction(error));
    }
}

export function* doGet({ payload }) {
    try {
        const response = yield call(axios.get, '/' + payload.endPoint, { params: payload.data });
        yield put(getSuccess(response.data, payload.key));
        if (payload.next) yield put(payload.next);
    } catch (error) {
        yield put(getError(payload.data, payload.key));
        yield put(showErrorAction(error));
    }
}
