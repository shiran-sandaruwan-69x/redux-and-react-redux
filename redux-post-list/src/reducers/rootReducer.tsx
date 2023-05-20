import {combineReducers} from "redux";
import getCustomerReducer from "./CustomerReducer";

const rootReducer = combineReducers({
    customers:getCustomerReducer
})

export default rootReducer