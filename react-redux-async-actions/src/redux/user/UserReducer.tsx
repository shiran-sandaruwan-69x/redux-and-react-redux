import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./UserTypes";

const initialState={
    isLoading:false,
    users:[],
    error:''
}

const userReducer=(state:any=initialState,actions:any)=>{
    switch (actions.type) {
        case FETCH_USER_REQUEST:return{
            ...state,
            isLoading: true
        }
        case FETCH_USER_SUCCESS:return {
            isLoading: false,
            users:actions.payload,
            error:''
        }
        case FETCH_USER_FAILURE:return {
            isLoading:false,
            users:[],
            error:actions.payload
        }
        default:return state
    }
}

export default userReducer