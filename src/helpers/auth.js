import firebase from "../firebase/firebaseConfig";
import {loginFailure, loginSuccess, registerFailure, registerSuccess} from "../store/acrions/auth";

export const signIn = (credentials) => dispatch => {

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password)
        .then(authData => {
                console.log('login', authData);

                dispatch(loginSuccess())
            }
        )
        .catch(e => dispatch(loginFailure(e)));
};
export const register = (credentials) => (dispatch) => {
    const firestore = firebase.firestore();
    return firebase.auth().createUserWithEmailAndPassword(
        credentials.email,
        credentials.password)
        .then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
            }).then(dispatch(registerSuccess())).catch(e => dispatch(registerFailure(e)))
        }).catch(e => dispatch(registerFailure(e)))
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

export const isSignedIn = () => {

    return firebase.auth().currentUser && firebase.auth().currentUser.uid;
};