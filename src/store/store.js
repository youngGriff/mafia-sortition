import {combineReducers, createStore, applyMiddleware} from "redux";
import {playerReducer} from './reducers/manual_players'
import {composeWithDevTools} from "redux-devtools-extension";
import {rolesReducer} from "./reducers/roles";
import {firebaseReducer, getFirebase, reactReduxFirebase} from "react-redux-firebase";
import thunk from 'redux-thunk';
import {firestoreReducer, getFirestore, reduxFirestore} from 'redux-firestore'
import fbConfig from '../firebase/firebaseConfig'
import {authReducer} from "./reducers/authReducer";

const rootReducer = combineReducers({
    players: playerReducer,
    roles: rolesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
});
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
        reactReduxFirebase(fbConfig, {
            userProfile: 'users',
            useFirestoreForProfile: true,
        }), reduxFirestore(fbConfig)));

export default store;