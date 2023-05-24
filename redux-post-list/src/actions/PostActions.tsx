import {FETCH_CUSTOMERS, SELECT_ROW} from "./PostActionTypes";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// export const getCustomers=()=>{
//     return{
//         type:FETCH_CUSTOMERS,
//         payload:[
//             {
//                 id:'1',
//                 name:'name 1'
//             },
//             {
//                 id:'2',
//                 name:'name 2'
//             },
//             {
//                 id:'3',
//                 name:'name 3'
//             },
//             {
//                 id:'4',
//                 name:'name 4'
//             }
//         ]
//     }
// }

export const getCustomers=()=>{
    return(dispatch:any)=>{
        axios({
            url:'/posts',
            method:'GET',
            responseType:'json'
        })
            .then((response:any)=>{
                let data=response.data
                console.log(data)
                dispatch({
                    type:FETCH_CUSTOMERS,
                    payload:data
                })
            })
            .catch((error:any)=>{
                console.log(error.message)
            })
    }
}

export const getTableSelectRow=(selectRow:any)=>{
    return{
        type:SELECT_ROW,
        payload: selectRow
    }
}

export const getSelectTableRowAndIndex=(selectRow:any,rowIndex:any)=>{
    return{
        type:'SELECT_ROW_AND_INDEX',
        payload:[
            {
                selectRow:selectRow,
                rowIndex:rowIndex
            }
        ]
    }
}