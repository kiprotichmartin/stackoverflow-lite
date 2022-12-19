import axios from "axios";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./commentsTypes";

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the comments
        const comments = response.data;
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchCommentsFailure(error.message));
      });
  };
};

export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchCommentsSuccess = (users) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: users,
  };
};

export const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};
