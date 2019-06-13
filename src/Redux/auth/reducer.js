import types from 'Constants/actionTypes';

const init_state = {
    user: null,
    login_in_progress: false
};

export default (state = init_state, action) => {
    switch (action.type) {
        case types.login:
            return { ...state, login_in_progress: true };
        case types.loginSuccess:
            return {
                ...state,
                login_in_progress: false
            };
        case types.logout:
            return { ...init_state };
        case types.loginError:
            return {
                ...state,
                login_in_progress: false
            };
        default:
            return { ...state };
    }
};
