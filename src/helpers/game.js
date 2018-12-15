import firebase from "../firebase/firebaseConfig";
import {getUid, getUidOrEmptyString} from "./auth";

const firestore = firebase.firestore();
export const createNewGame = (game) => {
    return firestore.collection('games')
        .add({...game, createdAt: new Date(), author: getUidOrEmptyString(), roles: [], players: []});
};
export const removePlayer = (player, id) => {
    const docRef = firestore.collection(`games`).doc(`${id}`);

    firestore.runTransaction(transaction => {
        return transaction.get(docRef).then(snapshot => {


            const smaller = snapshot.get('players').filter(item => item !== player);
            transaction.update(docRef, 'players', smaller);
        });
    });
};
export const isMyGame = (game) => {

    return game.author === getUidOrEmptyString()
};
export const makeRequestForGame = (game) => {
    const docRef = firestore.collection(`games`).doc(`${game.id}`);

    firestore.runTransaction(transaction => {
        return transaction.get(docRef).then(snapshot => {
            const largerArray = snapshot.get('players');
            if (largerArray.includes(getUid())) {
                return;
            }
            largerArray.push(
                getUid()
            );
            transaction.update(docRef, 'players', largerArray);
        });
    });
};
export const cancelRequestForGame = (game) => {
    const docRef = firestore.collection(`games`).doc(`${game.id}`);

    firestore.runTransaction(transaction => {
        return transaction.get(docRef).then(snapshot => {
            const smaller = snapshot.get('players').filter(item => item !== getUid());

            transaction.update(docRef, 'players', smaller);
        });
    });
}

export const addRole = (role, gameId) => {
    const docRef = firestore.collection('games').doc(gameId);
    firestore.runTransaction(transaction => {
        return transaction.get(docRef).then(snapshot => {
            const largerArray = snapshot.get('roles');

            largerArray.push(
                role
            );
            transaction.update(docRef, 'roles', largerArray);
        });
    });
};
export const editRole = (role, gameId) => {

    const docRef = firestore.collection('games').doc(gameId);
    firestore.runTransaction(transaction => {
        return transaction.get(docRef).then(snapshot => {
            const largerArray = snapshot.get('roles');

            largerArray.forEach((item, index) => {
                    if (role.id === item.id) {
                        largerArray[index] = role;
                    }
                }
            );
            transaction.update(docRef, 'roles', largerArray);
        });
    });
};
export const removeRole = (id, gameId) => {
    const docRef = firestore.collection('games').doc(gameId);

    firestore.runTransaction(transaction => {
        return transaction.get(docRef).then(snapshot => {
            const smaller = snapshot.get('roles').filter(item => item.id !== id);

            transaction.update(docRef, 'roles', smaller);
        });
    });
};
