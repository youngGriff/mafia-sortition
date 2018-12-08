import * as constants from '../constants'
import {createRole} from "../../helpers/utils";

const roles = [createRole('Mafia', 'Wins with mafia . Each night team choose player to kill him', 2),
    createRole('Godfather', 'The head of the Mafia... the Godfather wakes and acts with the Mafia each night. The Godfather appears as a Civilian when investigated by the Detective. The Mafia lose if the Godfather dies.'),
    createRole('Detective', 'The Moderator wakes the Detective each night to select a player to investigate. The Moderator will signal the Detective if the selected player is Mafia.'),
    createRole('Doctor', 'The Moderator wakes the Doctor each night to select a player to save. The selected player will not die if selected by the Mafia that night. The Doctor may select himself but cannot select the same player two nights in a row.')
].map((item, index) => {
    return {...item, id: index};
});
const initialState = {
    isEditing: false,
    editingRole: null,
    roles
};
let id = initialState.roles.length;

export function rolesReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ACTION_MANUAL_ADD_GAME_ROLE:
            const role = {...action.payload, id};
            id++;
            return {
                roles: [...state.roles, role],
            };
        case constants.ACTION_MANUAL_REMOVE_GAME_ROLE:
            const roles = state.roles.filter((value => {
                return value.id !== action.payload;
            }));
            return {
                ...state, roles
            };
        case constants.ACTION_MANUAL_START_EDITING_ROLE:
            return {...state, isEditing: true, editingRole: action.payload};
        case constants.ACTION_MANUAL_FINISH_EDITING_ROLE:
            return {...state, isEditing: false, editingRole: null};

        case constants.ACTION_MANUAL_HAS_EDITED_ROLE:

            const newRoles = state.roles.filter((value => {
                return value.id !== action.payload.id;
            }));
            console.log(newRoles);
            newRoles.push(action.payload);
            console.log(newRoles);


            return {...state, isEditing: false, editingRole: null, roles: newRoles};
        default:
            return state;
    }

}