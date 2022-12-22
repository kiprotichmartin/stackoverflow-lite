import axios from "axios";
import { toast } from "react-toastify";
import {
  FETCH_ANSWERS_REQUEST,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE,
  POST_ANSWERS_REQUEST,
  POST_ANSWERS_SUCCESS,
  POST_ANSWERS_FAILURE,
} from "./answersTypes";

export const fetchAnswers = (QuestionID) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    axios
      .get(`http://localhost:5000/answers/${QuestionID}`)
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        // toast.success(response.data.message, { theme: "dark" });
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        // toast.warn(error.response.data.error, { theme: "dark" });
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const postAnswer = (formdata) => {
  return (dispatch) => {
    dispatch(postAnswersRequest());
    const token = sessionStorage.getItem("token");
    axios
      .post("http://localhost:5000/answers", formdata, {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        // response.data is the answers
        const answers = response.data;
        toast.success(response.data.message, { theme: "dark" });
        dispatch(postAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        console.log(error);
        toast.warn(error.response.data.error, { theme: "dark" });
        dispatch(postAnswersFailure(error.message));
      });
  };
};

export const PreferredAnswer = (answerid) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    const token = sessionStorage.getItem("token");
    axios
      .put(`http://localhost:5000/answers/${answerid}`, {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        toast.success(response.data.message, { theme: "dark" });
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        toast.warn(error.response.data.error, { theme: "dark" });
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const upvote = (answerid) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    const token = sessionStorage.getItem("token");
    axios
      .put(`http://localhost:5000/answers/${answerid}/vote/upvote`, {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        console.log(response);
        toast.success(response.data.message, { theme: "dark" });
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        console.log(error);
        toast.warn(error.response.data.error, { theme: "dark" });
        dispatch(fetchAnswersFailure(error.message));
      });
  };
};

export const downvote = (answerid) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    const token = sessionStorage.getItem("token");
    axios
      .put(`http://localhost:5000/answers/${answerid}/vote/downvote`, {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        // response.data is the questions
        const answers = response.data;
        toast.success(response.data.message, { theme: "dark" });
        dispatch(fetchAnswersSuccess(answers));
      })
      .catch((error) => {
        // error.message is the error message
        toast.warn(error.response.data.error, { theme: "dark" });
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

export const postAnswersRequest = (error) => {
  return {
    type: POST_ANSWERS_REQUEST,
    payload: error,
  };
};

export const postAnswersSuccess = (answers) => {
  return {
    type: POST_ANSWERS_SUCCESS,
    payload: answers,
  };
};

export const postAnswersFailure = (error) => {
  return {
    type: POST_ANSWERS_FAILURE,
    payload: error,
  };
};
