import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import rest from './rest/reducer';

const reducers = combineReducers({
    authUser,
    rest,
});

export default reducers;
