import {BUY_CAKE} from './CakeTypes'

const initialState = {
    numOfCake:10
}

const cakeReducer=(state:any=initialState,action:any)=>{
    switch (action.type) {
        case BUY_CAKE:return{
            ...state,
            numOfCake: state.numOfCake -1
        }
        default:return state
    }
}

export default cakeReducer
