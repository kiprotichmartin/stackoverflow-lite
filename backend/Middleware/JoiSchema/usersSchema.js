const Joi = require("joi");

const oldUsersSchema = Joi.object({
  // UserID: Joi.string()
  //   .trim()
  //   .guid({
  //     version: ["uuidv4"],
  //   })
  //   .required(),

  // Username: Joi.string().alphanum().min(3).max(30).case("lower").required(),

  Email: Joi.string()
    .trim()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),

  Password: Joi.string()
    .trim()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    )
    .required(),

  // Avatar: Joi.any,
});

const newUsersSchema = Joi.object({
  // UserID: Joi.string()
  //   .trim()
  //   .guid({
  //     version: ["uuidv4"],
  //   })
  //   .required(),

  Username: Joi.string().alphanum().min(3).max(30).case("lower").required(),

  Email: Joi.string()
    .trim()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),

  Password: Joi.string()
    .trim()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    )
    .required(),

  Avatar: Joi.any,
});

module.exports = { oldUsersSchema, newUsersSchema };

// const validateUser = async () => {
//   try {
//     const value = await schema.validateAsync({
//       UserID: "1d5138ec-3afc-4dd2-a73c-fe3dc357ca89",
//       Username: "martinkiprotich",
//       Email: "martinkiprotich.mk@gmail.com",
//       Password: "izTTTeCW55v&#b",
//       Avatar:
//         "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg",
//     });
//     console.log(value);
//     console.log("the values passed the test");
//   } catch (error) {
//     console.dir(error);
//   }
// };

// validateUser();
