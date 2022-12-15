const {
  postAnAnswer,
  markPreferredAnswer,
  upvoteAnswer,
  downvoteAnswer,
  deleteAnAnswer,
} = require("../Controllers/answersController");

const { Router } = require("express");
const answersRoutes = Router();

answersRoutes.post("/:QuestionID/answers", postAnAnswer);
answersRoutes.put("/:QuestionID/answers/:AnswerID", markPreferredAnswer);
answersRoutes.put("/:QuestionID/answers/:AnswerID/vote/upvote", upvoteAnswer);
answersRoutes.put("/:QuestionID/answers/:AnswerID/vote/downvote", downvoteAnswer);
answersRoutes.delete("/:QuestionID/answers/:AnswerID", deleteAnAnswer);

module.exports = { answersRoutes };
