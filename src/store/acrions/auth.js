import {
    ACTION_LOGIN_FAILURE,
    ACTION_LOGIN_SUCCESS,
    ACTION_REGISTER_FAILURE,
    ACTION_REGISTER_SUCCESS
} from "../constants";

export function loginSuccess() {
    return {
        type: ACTION_LOGIN_SUCCESS,
    }
}

export function loginFailure(error) {
    return {
        type: ACTION_LOGIN_FAILURE,
        payload: error
    }
}

export function registerSuccess() {
    return {
        type: ACTION_REGISTER_SUCCESS,
    }
}

export function registerFailure(error) {
    return {
        type: ACTION_REGISTER_FAILURE,
        payload: error
    }
}