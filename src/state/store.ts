import {legacy_createStore as createStore,applyMiddleware} from "redux";
import reducers from "./reduces";
import thunk from "redux-thunk";

export const store = createStore(reducers,{},applyMiddleware(thunk));

