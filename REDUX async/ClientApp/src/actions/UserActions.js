import axios from 'axios';
import {
  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from '../constants/userConstants';

export const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data.map((user) => user);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err.message));
      });
  };
};
