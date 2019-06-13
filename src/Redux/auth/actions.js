import types from 'Constants/actionTypes';

export const loginUserAction = (user, history) => ({
    type: types.login,
    payload: { user, history },
});

export const loginUserSuccessAction = (user, history) => ({
    type: types.loginSuccess,
    payload: { user, history },
});

export const loginUserErrorAction = () => ({
    type: types.loginError,
    payload: {},
});

export const logoutAction = () => ({
    type: types.logout,
    payload: {},
});
