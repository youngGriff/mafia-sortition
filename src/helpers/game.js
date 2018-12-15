import firebase from "../firebase/firebaseConfig";
import {getUid, getUidOrEmptyString} from "./auth";

const firestore = firebase.firestore();
export const createNewGame = (game) => {
    return firestore.collection('games')
        .add({...game, createdAt: new Date(), author: getUidOrEmptyString()});
};
export const removePlayer = (player) => {
    return firestore.collection('games').doc(`players/${player.id}`).delete();
};
export const isMyGame = (game) => {
    console.log('game', game);
    console.log('user id', getUidOrEmptyString());

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