import types from 'Constants/actionTypes';

export const showErrorAction = error => ({
    type: types.showError,
    payload: error,
});

export const showSuccessAction = success => ({
    type: types.showSuccess,
    payload: success,
});
