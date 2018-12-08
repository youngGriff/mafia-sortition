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
                nickname: credentials.nickname,
            })
        })
};
export const signOut = () => {
    firebase.auth().signOut();
}