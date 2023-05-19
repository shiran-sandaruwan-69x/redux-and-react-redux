
import {BUY_ICE_CREAM} from './iceCreamTypes'
export const buyIceCream=(noOf:any)=>{
    return{
        type:BUY_ICE_CREAM,
        payload:noOf
    }
}

