import { FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api';

export const getUsers = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers(page);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}