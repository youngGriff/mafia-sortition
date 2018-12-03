import * as constants from "../constants";

export function loadingReducer(state = {loading: false}, action) {
    switch (action.type) {
        case constants.ACTION_START_LOADING:
            return {loading: true};
        case constants.ACTION_STOP_LOADING:
            return {loading: true};

        default:
            return state;
    }

}