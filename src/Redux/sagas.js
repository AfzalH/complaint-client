import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import restSagas from './rest/saga';
import notificationSagas from './notification/saga';

export default function* rootSaga(getState) {
    yield all([authSagas(), restSagas(), notificationSagas()]);
}
