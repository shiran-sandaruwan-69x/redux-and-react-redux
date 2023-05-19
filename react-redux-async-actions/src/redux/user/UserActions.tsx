import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from "./UserTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

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

export const getUsers=()=>{
    return(dispatch:any)=>{
        dispatch(fetchUserRequest)
        axios({
            url:'/users',
            method:"GET",
            responseType:'json'
        })
            .then((response:any)=>{
                const users=response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch((error:any)=>{
                const errorMsg=error.message
                console.log(errorMsg)
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}