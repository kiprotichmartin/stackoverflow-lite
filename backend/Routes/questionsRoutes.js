const {
  getAllQuestions,
  getOneQuestion,
  questionWithMostAnswers,
  postAQuestion,
  deletetAQuestion,
  searchQuestions,
  fetchAllQuestionsAsked,
} = require("../Controllers/questionsController");

const { Router } = require("express");
const questionsRoutes = Router();

questionsRoutes.get("/", getAllQuestions);
questionsRoutes.get("/:QuestionID", getOneQuestion);
questionsRoutes.get("/question/mostanswers", questionWithMostAnswers);
questionsRoutes.get("/search/:searchTerm", searchQuestions);
questionsRoutes.get("/user/:UserID", fetchAllQuestionsAsked);
questionsRoutes.post("/", postAQuestion);
questionsRoutes.delete("/:QuestionID", deletetAQuestion);

module.exports = { questionsRoutes };
