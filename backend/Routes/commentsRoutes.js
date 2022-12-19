const {
  postAComment,
  deleteAComment,
} = require("../Controllers/commentsController");

const { Router } = require("express");
const { authenticateToken } = require("../Middleware/verifyToken");
const commentsValidation = require("../Middleware/SchemaValidators/commentsSchemaValidator");
const commentsRoutes = Router();

commentsRoutes.post(
  "/:QuestionID/answers/:AnswerID/comments",
  authenticateToken,
  commentsValidation,
  postAComment
);
commentsRoutes.delete(
  "/:QuestionID/answers/:AnswerID/comments/:CommentID",
  authenticateToken,
  deleteAComment
);

module.exports = { commentsRoutes };
