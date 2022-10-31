import {legacy_createStore as createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import repositoriesReducer from "./reducers/repositoriesReducer";

const store = createStore(
    combineReducers({
        serachRepositories: repositoriesReducer
    }),
    applyMiddleware(thunk))

export default store;
