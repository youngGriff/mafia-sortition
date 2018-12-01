import * as constans from '../constants'

export function addPlayer(player) {
    return {
        type: constans.ACTION_MANUAL_ADD_NEW_PLAYER,
        payload: player
    }
}

export function removePlayer(player) {
    return {
        type: constans.ACTION_MANUAL_REMOVE_PLAYER,
        payload: player
    }
}