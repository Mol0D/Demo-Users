export const GET_USERS_IS_LOADING = "GET_USERS_IS_LOADING";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsersIsLoading = () =>{
    return{
        type: GET_USERS_IS_LOADING
    }
}

export const getUsersError = (error) =>{
    return{
        type: GET_USERS_ERROR,
        payload: {
            error
        }
    }
}

export const getUsersSuccess = (users) =>{
    return{
        type: GET_USERS_SUCCESS,
        payload:{
            users
        }
    }
}

export const getUsers = () =>{
    return dispatch =>{
        console.log(3);
        dispatch(getUsersIsLoading());
        return fetch(`https://my-json-server.typicode.com/Mol0D/Demo-Users/users`)
            .then(response => response.json())
            .then(json => dispatch(getUsersSuccess(json)))
            .catch(err => dispatch(getUsersError(err)))
    }
}