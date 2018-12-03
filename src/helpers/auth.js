export const signIn = (firebase, credentials) => {
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password)
};
export const register = (firebase, firestore, credentials) => {
    firebase.auth().createUserWithEmailAndPassword(
        credentials.email,
        credentials.password)
        .then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                nickname: credentials.nickname,
            })
        })
};