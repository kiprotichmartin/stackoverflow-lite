const { commentsSchema } = require("../JoiSchema/commentsSchema");

const commentsValidation = async (req, res, next) => {
  const payload = {
    AnswerID: req.params.QuestionID,
    QuestionID: req.params.QuestionID,
    UserID: req.body.UserID,
    Username: req.body.Username,
    Description: req.body.Description,
    isDeleted: req.body.isDeleted,
  };

  const { error } = commentsSchema.validate(payload);
  if (error) {
    res.status(403);
    return res.json(error.message);
  } else {
    next();
  }
};
module.exports = commentsValidation;
