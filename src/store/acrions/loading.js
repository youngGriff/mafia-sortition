import {ACTION_SET_LOADING} from "../constants";

export function startLoading() {
    return {
        type: ACTION_SET_LOADING,
        payload: true

    }
}

export function stopLoading() {
    return {
        type: ACTION_SET_LOADING,
        payload: false
    }
}