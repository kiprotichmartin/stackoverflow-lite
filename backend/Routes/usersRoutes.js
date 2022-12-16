const { signInUser, signUpUser } = require("../Controllers/usersController");

const { Router } = require("express");
const usersRoutes = Router();

usersRoutes.get("/signup", signUpUser);
usersRoutes.get("/signin", signInUser);

module.exports = { usersRoutes };
