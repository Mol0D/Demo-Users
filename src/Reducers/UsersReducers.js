import {GET_USERS_IS_LOADING, GET_USERS_ERROR, GET_USERS_SUCCESS} from '../Actions/ActionsUsers';

const initialState = {
    isError: false,
    textError: '',
    isLoading: false,
    users: []
}


const usersReducers = (state = initialState, action)=>{
    switch(action.type){
        
        case GET_USERS_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false,
                textError: ''
            })
        case GET_USERS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                textError: action.payload.error
            })
        case GET_USERS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isError: false,
                textError: '',
                users: action.payload.users
            })
        default:
            return state
    }
}

export default usersReducers;