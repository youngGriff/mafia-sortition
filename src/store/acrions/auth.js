import {ACTION_START_LOADING, ACTION_STOP_LOADING} from "../constants";

export function startLoading() {
    return {
        type: ACTION_START_LOADING
    }
}
export function stopLoading() {
    return {
        type: ACTION_STOP_LOADING
    }
}