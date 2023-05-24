import {CUSTOMER_GET, CUSTOMER_SAVE} from "../actions/CustomerActionTypes";

const initialState={
    customerSaveData:[],
    allCustomer:[]
}

const customerReducer=(state:any=initialState,actions:any)=>{
    switch (actions.type){
        case CUSTOMER_SAVE:return{
            ...state,
            customerSaveData: [...state.customerSaveData,actions.payload],
            allCustomer:[...state.allCustomer,actions.payload]
        }

        case CUSTOMER_GET:return {
            ...state,
            allCustomer: actions.payload
        }

        default : return state
    }
}

export default customerReducer