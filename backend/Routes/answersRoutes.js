const {
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

answersRoutes.post("/:QuestionID/answers", authenticateToken, answersValidation, postAnAnswer);
answersRoutes.put(
  "/:QuestionID/answers/:AnswerID",
  authenticateToken,
  markPreferredAnswer
);
answersRoutes.put(
  "/:QuestionID/answers/:AnswerID/vote/upvote",
  authenticateToken,
  upvoteAnswer
);
answersRoutes.put(
  "/:QuestionID/answers/:AnswerID/vote/downvote",
  authenticateToken,
  downvoteAnswer
);
answersRoutes.delete(
  "/:QuestionID/answers/:AnswerID",
  authenticateToken,
  deleteAnAnswer
);

module.exports = { answersRoutes };
