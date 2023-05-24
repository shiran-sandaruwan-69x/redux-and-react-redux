import axios from "axios";
import {CUSTOMER_SAVE} from "./CustomerActionTypes";
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
                console.log(response)
                dispatch({
                    type:CUSTOMER_SAVE,
                    payload:[response]
                })
            })
            .catch((error:any)=>{
                console.log(error.message)
            })
    }
}

