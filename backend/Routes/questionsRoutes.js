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
const questionsValidation = require("../Middleware/SchemaValidators/questionsSchemaValidator");
const { authenticateToken } = require("../Middleware/verifyToken");
const questionsRoutes = Router();

questionsRoutes.get("/", getAllQuestions);
questionsRoutes.get("/:QuestionID", getOneQuestion);
questionsRoutes.get("/question/mostanswers", questionWithMostAnswers);
questionsRoutes.get("/search/:searchTerm", searchQuestions);
questionsRoutes.get("/user/:UserID", authenticateToken, fetchAllQuestionsAsked);
questionsRoutes.post(
  "/",
  authenticateToken,
  questionsValidation,
  postAQuestion
);
questionsRoutes.delete("/:QuestionID", authenticateToken, deletetAQuestion);

module.exports = { questionsRoutes };
