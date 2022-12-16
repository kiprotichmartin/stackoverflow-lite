const { oldUsersSchema, newUsersSchema } = require("../JoiSchema/usersSchema");

const oldUsersValidation = async (req, res, next) => {
  const payload = {
    // QuestionID: req.params.QuestionID,
    // UserID: req.body.UserID,=
    Email: req.body.Email,
    Password: req.body.Password,
  };

  const { error } = oldUsersSchema.validate(payload);
  if (error) {
    res.status(403);
    return res.json(error.message);
  } else {
    next();
  }
};

const newUsersValidation = async (req, res, next) => {
  const payload = {
    // QuestionID: req.params.QuestionID,
    // UserID: req.body.UserID,
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Avatar: req.body.Title,
  };

  const { error } = newUsersSchema.validate(payload);
  if (error) {
    res.status(403);
    return res.json(error.message);
  } else {
    next();
  }
};

module.exports = { oldUsersValidation, newUsersValidation };
