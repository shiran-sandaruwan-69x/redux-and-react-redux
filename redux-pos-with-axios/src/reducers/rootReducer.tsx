import {combineReducers} from "redux";
import customerReducer from "./CustomerReducer";


const rootReducer = combineReducers({
    customers:customerReducer
})

export default rootReducer