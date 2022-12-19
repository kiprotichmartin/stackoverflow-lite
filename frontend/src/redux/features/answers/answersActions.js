import axios from "axios";
import {
  FETCH_ANSWERS_REQUEST,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE,
} from "./answersTypes";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_ANSWERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_ANSWERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_ANSWERS_FAILURE,
    payload: error,
  };
};
