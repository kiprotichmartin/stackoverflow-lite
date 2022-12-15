const {
  postAComment,
  deleteAComment,
} = require("../Controllers/commentsController");

const { Router } = require("express");
const commentsRoutes = Router();

commentsRoutes.post("/:QuestionID/answers/:AnswerID/comments", postAComment);
commentsRoutes.delete("/:QuestionID/answers/:AnswerID/comments/:CommentID", deleteAComment);

module.exports = { commentsRoutes };
