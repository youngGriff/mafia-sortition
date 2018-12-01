import {countOfPlayersWithRole, createPlayer, createRole, makeSortition, transformRoles} from './utils'

const initialState = [createRole('Mafia', 'Wins with mafia . Each night team choose player to kill him', 2),
    createRole('Godfather', 'The head of the Mafia... the Godfather wakes and acts with the Mafia each night. The Godfather appears as a Civilian when investigated by the Detective. The Mafia lose if the Godfather dies.'),
    createRole('Detective', 'The Moderator wakes the Detective each night to select a player to investigate. The Moderator will signal the Detective if the selected player is Mafia.'),
    createRole('Doctor', 'The Moderator wakes the Doctor each night to select a player to save. The selected player will not die if selected by the Mafia that night. The Doctor may select himself but cannot select the same player two nights in a row.')
];
const players = [createPlayer('Mark', 'Borsh'),
    createPlayer('Winston', 'Imanuel'),
    createPlayer('Iren', 'Romul'),
    createPlayer('Fial', 'EF'),
    createPlayer('wad', 'dw'),
    createPlayer('a', 'd'),
    createPlayer('gawdhj', 'adwadwwad'),
    createPlayer('dawdaada', 'dawawd')];

test('Check total role count', () => {
    const sum = countOfPlayersWithRole(initialState);
    console.log(sum);
    expect(sum).toEqual(5);
});
test('Transform Roles', () => {
    const transformedRoles = transformRoles(initialState);
]    expect(transformedRoles.length).toEqual(5);
});
test('Sortition', () => {
    const sortition = makeSortition(players, initialState);

    expect(sortition.length).toEqual(players.length);
});
