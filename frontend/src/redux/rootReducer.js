import { combineReducers } from "redux";
import questionsReducer from "./features/questions/questionsReducer";
import answersReducer from "./features/answers/answersReducer";
import commentsReducer from "./features/comments/commentsReducer";
import usersReducer from "./features/users/usersReducer";

const rootReducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  comments: commentsReducer,
  users: usersReducer,
});

export default rootReducer;
