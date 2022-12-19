const { signUpUser, signInUser } = require("../Controllers/usersController");
const { Router } = require("express");
const { oldUsersValidation, newUsersValidation } = require("../Middleware/SchemaValidators/usersSchemaValidator");
const usersRoutes = Router();

usersRoutes.get("/signup", newUsersValidation, signUpUser);
usersRoutes.get("/signin", oldUsersValidation, signInUser);

module.exports = { usersRoutes };
