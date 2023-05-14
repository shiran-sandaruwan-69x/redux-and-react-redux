const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// this is action
function buyCake() {
    return {
        type:BUY_CAKE,
        info:'you can get a cake'
    }
}

function buyIceCream() {
    return {
        type:BUY_ICECREAM,
        info:'you can get a ice cream'
    }
}

// this is reducer | (previousState,actions) => newState

const initialCakeState = {
    noOfCustomers:10
}

const initialIceCreamState = {
    noOfIceCream:20
}

const cakeReducer = (state=initialCakeState,action)=>{
    switch (action.type){
        case "BUY_CAKE":return {
            ...state,
            noOfCustomers:state.noOfCustomers -1
        }
        default: return state
    }
}

const iceCreamReducer = (state=initialIceCreamState,action)=>{
    switch (action.type){
        case BUY_ICECREAM:return {
            noOfIceCream: state.noOfIceCream -1
        }
        default: return state
    }
}


// cake store

const cakeState = createStore(cakeReducer)
console.log('initial cake state',cakeState.getState())
const unsubscribeCake=cakeState.subscribe(()=> console.log('update state',cakeState.getState()))
cakeState.dispatch(buyCake())
cakeState.dispatch(buyCake())
cakeState.dispatch(buyCake())
unsubscribeCake()

// ice cream store

const iceCreamState = createStore(iceCreamReducer) // create a store
console.log('initial ice cream state',iceCreamState.getState()) // get a no of ice cream
const unsubscribeIceCream = iceCreamState.subscribe(()=>console.log('update ice cream state')) // then subscribe app to reducer
iceCreamState.dispatch(buyIceCream()) // then get a ice cream
iceCreamState.dispatch(buyIceCream())
iceCreamState.dispatch(buyIceCream())
unsubscribeIceCream()