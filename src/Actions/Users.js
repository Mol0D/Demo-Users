export const GET_USERS_IS_LOADING = "GET_USERS_IS_LOADING";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const DELETE_USERS_ERROR = 'DELETE_USERS_ERROR';
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
export const POST_USERS_SUCCESS = 'POST_USERS_SUCCESS';
export const POST_USERS_ERROR = 'POST_USERS_ERROR';

const _URL = 'http://localhost:3001/users'

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

export const deleteUsersSuccess = (id) =>{
    return{
        type: DELETE_USERS_SUCCESS,
        payload: {
            id
        }
    }
}

export const postUserError = error =>{
    return{
        type: POST_USERS_ERROR,
        error
    }
}

export const postUsersSuccess = user =>{
    return{
        type: POST_USERS_SUCCESS,
        payload: {
            user
        }
    }
}

export const getUsers = (query='') =>{
    const url = `${_URL}?${query}`;
    return dispatch =>{
        dispatch(getUsersIsLoading());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(getUsersSuccess(json)))
            .catch(err => dispatch(getUsersError(err)))
    }
}

export const fetchDeleteUsers = (id) =>{
    const url = `${_URL}/${id}`
    return dispatch =>{
        dispatch(deleteUsersSuccess(id))
        return fetch(url, {
            method: 'DELETE'
        })
    }
}

export const fetchPostUsers = user =>{
    const url = `${_URL}`;
    return dispatch =>{
        dispatch(postUsersSuccess(user))
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .catch(err=>dispatch(postUserError(err)))
    }
}