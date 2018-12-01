import * as constants from '../constants'
import {createPlayer} from "../../utils";

const initialState = [createPlayer('Mark', 'Borsh'),
    createPlayer('Winston', 'Imanuel'),
    createPlayer('Iren', 'Romul'),
    createPlayer('Fial', 'EF'),
    createPlayer('wad', 'dw'),
    createPlayer('a', 'd'),
    createPlayer('gawdhj', 'adwadwwad'),
    createPlayer('dawdaada', 'dawawd')];


export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ACTION_MANUAL_ADD_NEW_PLAYER:
            return [...state, action.payload];
        case constants.ACTION_MANUAL_REMOVE_PLAYER:

            return state.filter((value => {
                return value !== action.payload;
            }));
        default:
            return state;
    }

}