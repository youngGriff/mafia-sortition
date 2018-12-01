import * as constans from '../constants'

export function addRole(role) {
    return {
        type: constans.ACTION_MANUAL_ADD_GAME_ROLE,
        payload: role
    }
}

export function removeRole(role) {
    return {
        type: constans.ACTION_MANUAL_REMOVE_GAME_ROLE,
        payload: role
    }
}
export function editRole(role) {
    return {
        type: constans.ACTION_MANUAL_EDIT_GAME_ROLE,
        payload: role
    }
}