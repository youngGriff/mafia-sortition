import {
    ACTION_LOGIN_FAILURE,
    ACTION_LOGIN_SUCCESS,
    ACTION_REGISTER_FAILURE,
    ACTION_REGISTER_SUCCESS
} from "../constants";

const initialState = {
    loginError: null,
    registerError: null
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_LOGIN_SUCCESS:
            return {...state, loginError: null};
        case ACTION_LOGIN_FAILURE:
            return {...state, loginError: action.payload.message};
        case ACTION_REGISTER_SUCCESS:
            return {...state, registerError: null};
        case ACTION_REGISTER_FAILURE:
            return {...state, registerError: action.payload.message};
        default:
            return state;
    }
}