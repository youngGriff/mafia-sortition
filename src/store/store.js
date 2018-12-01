import {combineReducers, createStore} from "redux";
import {playerReducer} from './reducers/manual_players'
import {composeWithDevTools} from "redux-devtools-extension";
import {rolesReducer} from "./reducers/roles";

const rootReducer = combineReducers({
    players: playerReducer,
    roles:rolesReducer
});
const store = createStore(rootReducer,composeWithDevTools());

export default store;