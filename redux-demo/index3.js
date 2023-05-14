const redux = require('redux')

const createStore = redux.createStore
const combineReducer = redux.combineReducers

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

const rootReducer = combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer)
console.log('initial cake state',store.getState())
const unsubscribe=store.subscribe(()=> console.log('update state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

console.log('initial cake state',store.getState().cake)
const unsubscribe2=store.subscribe(()=> console.log('update state',store.getState().cake))
store.dispatch(buyCake())
unsubscribe2()

