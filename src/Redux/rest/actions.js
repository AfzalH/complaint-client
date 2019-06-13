import types from 'Constants/actionTypes';

export const updateAction = (endPoint, data, key, next = null) => ({
    type: types.update,
    payload: { endPoint, data, key, next },
});

export const updateSuccess = (data, key) => ({
    type: types.updateSuccess,
    payload: { data, key },
});

export const updateError = (data, key) => ({
    type: types.updateError,
    payload: { data, key },
});

export const getAction = (endPoint, data, key, next = null) => ({
    type: types.get,
    payload: { endPoint, data, key, next },
});

export const getSuccess = (data, key) => ({
    type: types.getSuccess,
    payload: { data, key },
});

export const getError = (data, key) => ({
    type: types.getError,
    payload: { data, key },
});
