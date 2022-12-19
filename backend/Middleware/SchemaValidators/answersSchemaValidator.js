const { answersSchema } = require("../JoiSchema/answersSchema");

const answersValidation = async (req, res, next) => {
  const payload = {
    QuestionID: req.params.QuestionID,
    UserID: req.body.UserID,
    Username: req.body.Username,
    Description: req.body.Description,
    Votes: req.body.Votes,
    TotalComments: req.body.TotalAnswers,
    PreferredAnswer: req.body.PreferredAnswer,
    isDeleted: req.body.isDeleted,
  };

  const { error } = answersSchema.validate(payload);
  if (error) {
    res.status(403);
    return res.json(error.message);
  } else {
    next();
  }
};
module.exports = answersValidation;
