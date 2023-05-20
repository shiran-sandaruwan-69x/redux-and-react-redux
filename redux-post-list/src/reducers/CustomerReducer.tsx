import {FETCH_CUSTOMERS} from "../actions/PostActionTypes";

const initialState={
    customers:''
}

const getCustomerReducer=(state:any=initialState,actions:any)=>{
    console.log(actions.payload)
    switch (actions.type) {
        case FETCH_CUSTOMERS:return{
            ...state,
            customers: actions.payload
        }
        default:return state
    }
}

export default getCustomerReducer