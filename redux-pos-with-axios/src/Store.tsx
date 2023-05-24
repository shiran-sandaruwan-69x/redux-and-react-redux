import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";


const store:any = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store