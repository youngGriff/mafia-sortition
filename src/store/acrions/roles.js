import * as constans from '../constants'

export function addRole(role) {
    return {
        type: constans.ACTION_MANUAL_ADD_GAME_ROLE,
        payload: role
    }
}

export function startEditingRole(role) {
    return {
        type: constans.ACTION_MANUAL_START_EDITING_ROLE,
        payload: role
    }
}

export function hasEditedRole(role) {
    return {
        type: constans.ACTION_MANUAL_HAS_EDITED_ROLE,
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

export function finishEditingRole() {
    return {
        type: constans.ACTION_MANUAL_FINISH_EDITING_ROLE
    }
}