const Joi = require("joi");

const schema = Joi.object({
  CommentID: Joi.string()
    .trim()
    .guid({
      version: ["uuidv4"],
    })
    .required(),

  AnswerID: Joi.string()
    .trim()
    .guid({
      version: ["uuidv4"],
    })
    .required(),

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

  isDeleted: Joi.boolean().falsy(0).truthy(1),
});

// const validateUser = async () => {
//   try {
//     const value = await schema.validateAsync({
//       CommentID: "f027ab56-d20a-4ec2-b444-626007b6edb1",
//       AnswerID: "dd5e6201-880c-4aec-b430-598c8037fcf3",
//       QuestionID: "5ad2ce98-bef1-4b57-a2b2-9d0ec2da2123",
//       UserID: "1d5138ec-3afc-4dd2-a73c-fe3dc357ca89",
//       Username: "martinkiprotich",
//       Description: "Can JavaScript be used outside the browser?",
//       isDeleted: 0,
//     });
//     console.log(value);
//     console.log("the values passed the test");
//   } catch (error) {
//     console.log(error);
//   }
// };

// validateUser();
