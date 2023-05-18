import {BUY_ICE_CREAM} from './iceCreamTypes'

const initialState = {
    noOfIceCream:20
}

const iceCreamReducer=(state:any=initialState,actions:any)=>{
    switch (actions.type){
        case BUY_ICE_CREAM:return{
            ...state,
            noOfIceCream: state.noOfIceCream - actions.payload
        }
        default: return state
    }
}

export default iceCreamReducer