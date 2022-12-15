const Joi = require("joi");

const questionsSchema = Joi.object({
  // QuestionID: Joi.string()
  //   .trim()
  //   .guid({
  //     version: ["uuidv4"],
  //   })
  //   .required(),

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

  Avatar: Joi.any(),

  Title: Joi.string().trim().required(),

  Description: Joi.string().trim().required(),

  TotalAnswers: Joi.number().integer().min(0),

  isDeleted: Joi.boolean().falsy(0).truthy(1),
});

module.exports = { questionsSchema };

// const validateUser = async () => {
//   try {
//     const value = await schema.validateAsync({
//       QuestionID: "5ad2ce98-bef1-4b57-a2b2-9d0ec2da2123",
//       UserID: "1d5138ec-3afc-4dd2-a73c-fe3dc357ca89",
//       Username: "martinkiprotich",
//       Avatar:
//         "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg",
//       Title: " JavaScript",
//       Description: "Can JavaScript be used outside the browser?",
//       TotalAnswers: 20,
//       isDeleted: 0,
//     });
//     console.log(value);
//     console.log("the values passed the test");
//   } catch (error) {
//     console.log(error);
//   }
// };

// validateUser();
