import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import {logger} from 'redux-logger';

const store:any = createStore(rootReducer,applyMiddleware(logger))

export default store

