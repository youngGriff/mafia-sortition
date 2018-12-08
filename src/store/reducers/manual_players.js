import * as constants from '../constants'
import {createPlayer} from "../../helpers/utils";

const initialState = [createPlayer('Mark', 'Borsh'),
    createPlayer('Winston', 'Imanuel'),
    createPlayer('Iren', 'Romul'),
    createPlayer('Fial', 'EF'),
    createPlayer('wad', 'dw'),
    createPlayer('a', 'd'),
    createPlayer('gawdhj', 'adwadwwad'),
    createPlayer('dawdaada', 'dawawd')].map((item, index) => {
    return {...item, id: index};
});

let id = initialState.length;

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ACTION_MANUAL_ADD_NEW_PLAYER:
            const newPlayer = {...action.payload, id};
            id++;
            return [...state, newPlayer];
        case
        constants.ACTION_MANUAL_REMOVE_PLAYER:

            return state.filter((value => {
                return value.id !== action.payload;
            }));
        default:
            return state;
    }

}