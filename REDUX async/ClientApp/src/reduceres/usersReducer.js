import {
  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from '../constants/userConstants';

import {
  initialState,
  fetchUserRequest,
  fetchUsersSuccess,
  fetchUsersFail,
} from '../actions/UserActions';

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
