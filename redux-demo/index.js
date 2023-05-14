
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
    switch (buyCake().type){
        case "BUY_CAKE":return {
            ...state,
            noOfCustomers:state.noOfCustomers -1
        }
        default: return state
    }
}


