import {FETCH_CUSTOMERS, SELECT_ROW} from "./PostActionTypes";

export const getCustomers=()=>{
    return{
        type:FETCH_CUSTOMERS,
        payload:[
            {
                id:'1',
                name:'name 1'
            },
            {
                id:'2',
                name:'name 2'
            },
            {
                id:'3',
                name:'name 3'
            },
            {
                id:'4',
                name:'name 4'
            }
        ]
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
        payload:{
            selectRow:selectRow,
            rowIndex:rowIndex
        }
    }
}