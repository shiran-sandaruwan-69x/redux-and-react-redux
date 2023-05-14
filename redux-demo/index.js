const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// this is action
function buyCake() {
    return {
        type:BUY_CAKE,
        info:'you can get a cake'
    }
}

// this is reducer | (previousState,actions) => newState

const initialState = {
    noOfCustomers:10
}

const reducer = (state=initialState,action)=>{
    switch (action.type){
        case "BUY_CAKE":return {
            ...state,
            noOfCustomers:state.noOfCustomers -1
        }
        default: return state
    }
}


// create store and implement and redux store responsibilities

const store = createStore(reducer)
console.log('initial state',store.getState())
const unsubscribe=store.subscribe(()=> console.log('update state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

