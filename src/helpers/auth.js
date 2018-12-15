import firebase from "../firebase/firebaseConfig";

export const signIn = (credentials) => {
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password)
};
export const register = (credentials) => {
    const firestore = firebase.firestore();
    return firebase.auth().createUserWithEmailAndPassword(
        credentials.email,
        credentials.password)
        .then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: credentials.firstName,
                lastName: credentials.lastName,

            })
        })
};
export const signOut = () => {
    firebase.auth().signOut();
};
export function getUid() {
    return firebase.auth().currentUser.uid;
}
export const getUidOrEmptyString = () => {


    return firebase.auth().currentUser ? getUid() : '';
};
