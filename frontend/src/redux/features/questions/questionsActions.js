import axios from "axios";
import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "./questionsTypes";

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .get("http://localhost:5000/questions")
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const fetchOneQuestion = (questionid) => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .get(`http://localhost:5000/questions/${questionid}`)
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const searchQuestions = (searchterm) => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .get(`http://localhost:5000/questions/search/${searchterm}`)
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const mostanswers = () => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .get("http://localhost:5000/questions/question/mostanswers")
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const allQuestionsAsked = (userid) => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .get(`http://localhost:5000/questions/user/${userid}`)
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const PostAQuestion = (formdata) => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .post("http://localhost:5000/questions")
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        console.log(questions);
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const deleteQuestion = (questionid) => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    axios
      .get(`http://localhost:5000/questions/${questionid}`)
      .then((response) => {
        // response.data is the questions
        const questions = response.data;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const fetchQuestionsRequest = () => {
  return {
    type: FETCH_QUESTIONS_REQUEST,
  };
};

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const fetchQuestionsFailure = (error) => {
  return {
    type: FETCH_QUESTIONS_FAILURE,
    payload: error,
  };
};
