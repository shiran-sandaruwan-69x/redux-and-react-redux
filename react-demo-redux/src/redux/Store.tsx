import {createStore} from "redux";
import CakeReducer from "./cake/CakeReducer";

const store:any = createStore(CakeReducer)

export default store

