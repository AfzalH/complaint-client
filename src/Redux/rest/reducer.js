import types from 'Constants/actionTypes';

const init_state = {
    updating: [],
    updatingValue: {},
    getting: [],
    data: {}
};

export default (state = init_state, action) => {
    switch (action.type) {
        case types.update:
            return {
                ...state,
                updating: [...state.updating, action.payload.key],
                updatingValue: { ...state.updatingValue, [action.payload.key]: action.payload.data }
            };

        case types.updateSuccess:
        case types.updateError:
            return {
                ...state,
                updating: state.updating.filter(item => item !== action.payload.key),
                updatingValue: { ...state.updatingValue, [action.payload.key]: undefined }
            };

        case types.get:
            return {
                ...state,
                getting: [...state.getting, action.payload.key]
            };

        case types.getSuccess:
            return {
                ...state,
                getting: state.getting.filter(item => item !== action.payload.key),
                data: { ...state.data, [action.payload.key]: action.payload.data }
            };

        case types.getError:
            return {
                ...state,
                getting: state.getting.filter(item => item !== action.payload.key),
                data: { ...state.data, [action.payload.key]: undefined }
            };
        case types.logout:
            return { ...init_state };

        default:
            return { ...state };
    }
};
