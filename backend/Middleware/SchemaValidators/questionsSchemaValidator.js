const { questionsSchema } = require("../JoiSchema/questionsSchema");

const questionsValidation = async (req, res, next) => {
  const payload = {
    // QuestionID: req.params.QuestionID,
    UserID: req.body.UserID,
    Username: req.body.Username,
    Avatar: req.body.Title,
    Title: req.body.Title,
    Description: req.body.Description,
    TotalAnswers: req.body.TotalAnswers,
    isDeleted: req.body.isDeleted,
  };

  const { error } = questionsSchema.validate(payload);
  if (error) {
    res.status(403);
    return res.json(error.message);
  } else {
    next();
  }
};
module.exports = questionsValidation;
