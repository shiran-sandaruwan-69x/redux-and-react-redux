import {createStore} from "redux";
import CakeReducer from "./actions/CakeReducer";

const store:any = createStore(CakeReducer)

export default store

