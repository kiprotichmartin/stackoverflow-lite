import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "./questionsTypes";

const initialState = {
  loading: false,
  questions: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questions: action.payload,
        error: "",
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        loading: false,
        questions: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
