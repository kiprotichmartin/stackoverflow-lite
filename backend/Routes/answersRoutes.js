const {
  getAnswers,
  postAnAnswer,
  markPreferredAnswer,
  upvoteAnswer,
  downvoteAnswer,
  deleteAnAnswer,
} = require("../Controllers/answersController");

const { Router } = require("express");
const { authenticateToken } = require("../Middleware/verifyToken");
const answersValidation = require("../Middleware/SchemaValidators/answersSchemaValidator");
const answersRoutes = Router();

answersRoutes.get("/:QuestionID", getAnswers);
answersRoutes.post("/", authenticateToken, answersValidation, postAnAnswer);
answersRoutes.put(
  "/:AnswerID",
  authenticateToken,
  markPreferredAnswer
);
answersRoutes.put(
  "/:AnswerID/vote/upvote",
  authenticateToken,
  upvoteAnswer
);
answersRoutes.put(
  "/:AnswerID/vote/downvote",
  authenticateToken,
  downvoteAnswer
);
answersRoutes.delete(
  "/:AnswerID",
  authenticateToken,
  deleteAnAnswer
);

module.exports = { answersRoutes };
