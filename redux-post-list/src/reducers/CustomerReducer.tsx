import {FETCH_CUSTOMERS, SELECT_ROW, SELECT_ROW_AND_INDEX} from "../actions/PostActionTypes";

const initialState={
    customers:[],
    selectRow:[],
    selectRowAndIndex:[]
}

const getCustomerReducer=(state:any=initialState,actions:any)=>{
    //console.log(actions.payload)
    switch (actions.type) {
        case FETCH_CUSTOMERS:return{
            ...state,
            customers: actions.payload
        }
        case SELECT_ROW:return {
            ...state,
            selectRow:actions.payload
        }
        case SELECT_ROW_AND_INDEX:return {
            ...state,
            selectRowAndIndex:actions.payload
        }
        default:return state
    }
}

export default getCustomerReducer