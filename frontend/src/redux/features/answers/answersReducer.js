import {
  FETCH_ANSWERS_REQUEST,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE,
  POST_ANSWERS_REQUEST,
  POST_ANSWERS_SUCCESS,
  POST_ANSWERS_FAILURE,
} from "./answersTypes";

const initialState = {
  loading: false,
  answers: [],
  error: "",
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANSWERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ANSWERS_SUCCESS:
      return {
        loading: false,
        answers: action.payload,
        error: "",
      };
    case FETCH_ANSWERS_FAILURE:
      return {
        loading: false,
        answers: [],
        error: action.payload,
      };
    case POST_ANSWERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_ANSWERS_SUCCESS:
      return {
        loading: false,
        message: action.payload,
        error: "",
      };
    case POST_ANSWERS_FAILURE:
      return {
        loading: false,
        answers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
