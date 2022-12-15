const {
  signInOrSignUp,
  fetchAllQuestionsAsked,
  searchQuestions,
} = require("../Controllers/usersController");

const { Router } = require("express");
const usersRoutes = Router();

usersRoutes.get("/signin", signInOrSignUp);
usersRoutes.get("/signup", signInOrSignUp);
usersRoutes.get("/questionsasked", fetchAllQuestionsAsked);
usersRoutes.get("/allquestions", searchQuestions);

module.exports = { usersRoutes };
