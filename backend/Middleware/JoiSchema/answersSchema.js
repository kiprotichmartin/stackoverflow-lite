const Joi = require("joi");

const answersSchema = Joi.object({
  // AnswerID: Joi.string()
  //   .trim()
  //   .guid({
  //     version: ["uuidv4"],
  //   })
  //   .required(),

  QuestionID: Joi.string()
    .trim()
    .guid({
      version: ["uuidv4"],
    })
    .required(),

  UserID: Joi.string()
    .trim()
    .guid({
      version: ["uuidv4"],
    })
    .required(),

  Username: Joi.string()
    .trim()
    .alphanum()
    .min(3)
    .max(30)
    .case("lower")
    .required(),

  Description: Joi.string().trim().required(),

  Votes: Joi.number().integer().min(0),

  TotalComments: Joi.number().integer().min(0),

  PreferredAnswer: Joi.boolean().falsy(0).truthy(1),

  isDeleted: Joi.boolean().falsy(0).truthy(1),
});

module.exports = { answersSchema };

// const validateUser = async () => {
//   try {
//     const value = await schema.validateAsync({
//       AnswerID: "dd5e6201-880c-4aec-b430-598c8037fcf3",
//       QuestionID: "5ad2ce98-bef1-4b57-a2b2-9d0ec2da2123",
//       UserID: "1d5138ec-3afc-4dd2-a73c-fe3dc357ca89",
//       Username: "martinkiprotich",
//       Description: "Can JavaScript be used outside the browser?",
//       Votes: 12,
//       TotalComments: 20,
//       PreferredAnswer: 0,
//       isDeleted: 0,
//     });
//     console.log(value);
//     console.log("the values passed the test");
//   } catch (error) {
//     console.log(error);
//   }
// };

// validateUser();
