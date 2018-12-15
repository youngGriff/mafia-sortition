export function createPlayer(firstName, lastName) {
    return {
        firstName, lastName,
        initials: () => {
            return `${firstName[0]} ${lastName[0]}`;
        },
        fullName: () => `${firstName} ${lastName}`
    }
}

export const getFullName = (player) => `${player.firstName} ${player.lastName}`;

export function createRole(name, description = '', count = 1) {
    return {
        name,
        description,
        count
    }
}

export function countOfPlayersWithRole(roles) {
    const result = roles.reduce((total, item) => total + item.count, 0);
    console.log(result);
    return result;
}


export function makeSortition(players, roles) {

    const transformedRoles = transformRoles(roles);
    const transformedPlayers = players.sort(() => Math.random() - 0.5);
    const lastIndex = transformedRoles.length;
    const result = transformedRoles.reduce((total, item, index) => {
        total.push({
            role: item,
            player: transformedPlayers[index]
        });

        return total;
    }, []);
    for (let i = lastIndex; i < transformedPlayers.length; i++) {
        result.push({
            role: {
                name: 'Civilian',
                description: 'The Civilians have no special ability. Their goal is to rid their town of the Mafia'
            },
            player: transformedPlayers[i]

        });

    }
    return result;

}

export function transformRoles(roles) {
    return roles.reduce((final, item) => {
        for (let i = 0; i < item.count; i++) {
            const {name, description} = item;
            final.push({name, description});
        }
        return final;
    }, []);
}

export const checkSortitionEnabled = (players, roles) => {
    const rolesLength = countOfPlayersWithRole(roles);
    return players.length >= rolesLength
        && players.length > 0 && rolesLength > 0;
}