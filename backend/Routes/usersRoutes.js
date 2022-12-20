const { signUpUser, signInUser } = require("../Controllers/usersController");
const { Router } = require("express");
const { oldUsersValidation, newUsersValidation } = require("../Middleware/SchemaValidators/usersSchemaValidator");
const usersRoutes = Router();

usersRoutes.post("/signup", newUsersValidation, signUpUser);
usersRoutes.post("/signin", oldUsersValidation, signInUser);

module.exports = { usersRoutes };
