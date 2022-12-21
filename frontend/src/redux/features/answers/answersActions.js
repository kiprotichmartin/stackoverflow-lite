import axios from "axios";
import {
  FETCH_ANSWERS_REQUEST,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE,
} from "./answersTypes";

export const fetchAnswers = (QuestionID) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    axios
      .get(`http://localhost:5000/answers/${QuestionID}`)
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const PreferredAnswer = (answerid) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    axios
      .put(`http://localhost:5000/answers/${answerid}`)
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const upvote = (answerid) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    axios
      .put(`http://localhost:5000/answers/${answerid}/vote/upvote`)
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const downvote = (answerid) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    axios
      .put(`http://localhost:5000/answers/${answerid}/vote/downvote`)
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const fetchAnswersRequest = () => {
  return {
    type: FETCH_ANSWERS_REQUEST,
  };
};

export const fetchAnswersSuccess = (answers) => {
  return {
    type: FETCH_ANSWERS_SUCCESS,
    payload: answers,
  };
};

export const fetchAnswersFailure = (error) => {
  return {
    type: FETCH_ANSWERS_FAILURE,
    payload: error,
  };
};
