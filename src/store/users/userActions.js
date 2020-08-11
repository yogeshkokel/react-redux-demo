import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userTypes';
import axios from 'axios';

const fetchUserRequest = () => {
    return {
        type: FETCH_USER,
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserError = (err) => {
    return {
        type: FETCH_USER_ERROR,
        payload: err
    }
}

export const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const { data } = response;
                dispatch(fetchUserSuccess(data))
            }).catch((err) => {
                dispatch(fetchUserError(err.message))
            });
    }
}