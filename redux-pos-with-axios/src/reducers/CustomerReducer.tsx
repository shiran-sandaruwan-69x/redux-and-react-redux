import {CUSTOMER_SAVE} from "../actions/CustomerActionTypes";

const initialState={
    customerSaveData:[]
}

const customerReducer=(state:any=initialState,actions:any)=>{
    switch (actions.type){
        case CUSTOMER_SAVE:return{
            ...state,
            customerSaveData: [...state.customerSaveData,actions.payload]
        }
        default : return state
    }
}

export default customerReducer