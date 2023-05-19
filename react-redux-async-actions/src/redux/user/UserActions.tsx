import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from "./UserTypes";

export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess=(users:any)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

const fetchUserFailure=(error:any)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}