
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState={
    isLoading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// actions

const fetchUsersRequest =()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = error => {
  return{
      type:FETCH_USERS_FAILURE,
      payload: error
  }
}

// reducer function

const reducer = (state=initialState,actions) =>{
    switch (actions.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                users: actions.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                isLoading: false,
                users: [],
                error: actions.payload
            }
    }
}

// store

const fetchUsers =()=>{
    return function (dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{

                const users = response.data.map(user=> user.id)
                dispatch(fetchUsersSuccess(users))

            })
            .catch(error=>{
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchUsers())