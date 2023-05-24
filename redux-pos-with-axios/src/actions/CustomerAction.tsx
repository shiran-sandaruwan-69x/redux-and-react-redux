import axios from "axios";
import {CUSTOMER_GET, CUSTOMER_SAVE} from "./CustomerActionTypes";
axios.defaults.baseURL ='https://jsonplaceholder.typicode.com'
export const saveCustomer=(customer:any)=>{
    return(dispatch:any)=>{
        axios({
            url:'/posts',
            method:'POST',
            responseType:'json',
            headers:{"Content-Type":'application/json'},
            data:customer
        })
            .then((response:any)=>{
                console.log(response.data)
                dispatch({
                    type:CUSTOMER_SAVE,
                    payload:response.data
                })
            })
            .catch((error:any)=>{
                console.log(error.message)
            })
    }
}

export const getCustomer=(dispatch:any)=>{
    axios({
        url:'/posts',
        method:'GET',
        responseType:'json'
    })
        .then((response:any)=>{
            dispatch({
                type:CUSTOMER_GET,
                payload:response.data
            })
        })
        .catch((error:any)=>{
            console.log(error.message)
        })
}

