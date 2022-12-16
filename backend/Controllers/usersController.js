const { v4: uuidv4 } = require("uuid");
const mssql = require("mssql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const securePassword = require("../utils/securePassword");
const sqlConfig = require("../config/index");

dotenv.config();

const signUpUser = async (req, res) => {
  try {
    const UserID = uuidv4();
    const { Username, Email, Password, Avatar } = req.body;
    const pool = await mssql.connect(sqlConfig);

    const hashedpwd = await securePassword(Password);

    const performQuery = (
      await pool
        .request()
        .query(`SELECT * FROM UsersTable WHERE Email = '${Email}'`)
    ).recordset;

    if (performQuery.length > 0) {
      res.status(201).json({
        message: `the user with email ${Email} already exists. please login`,
      });
    } else if (performQuery.length === 0) {
      await pool
        .request()
        .input("UserID", mssql.VarChar, UserID)
        .input("Username", mssql.VarChar, Username)
        .input("Email", mssql.VarChar, Email)
        .input("Password", mssql.VarChar, hashedpwd)
        .input("Avatar", mssql.VarChar, Avatar)
        .execute("signUpUser");

      res.status(201).json({
        message: `the user with email ${Email} has been registered successfully`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const signInUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(`SELECT * FROM UsersTable WHERE Email = '${Email}'`)
    ).recordset;

    if (performQuery.length > 0) {
      const checkPasswordValidity = await bcrypt.compare(
        Password,
        performQuery[0].Password
      );
      if (!checkPasswordValidity)
        return res.status(403).json({ message: "wrong password" });

      const { UserID, Username, Email } = performQuery[0];

      const token = jwt.sign(
        {
          UserID,
          Username,
          Email,
        },
        // process.env.JWT_SECRET,
        "&m4BQF#5EDuZ@gFr&5MU^Eu",
        {
          expiresIn: "100s",
        }
      );

      res.status(201).json({
        message: `the user with email ${Email} exists. login successful`,
        auth: true,
        UserID: UserID,
        Email: Email,
        Username: Username,
        Password: Password,
        Token: token,
      });
    } else if (performQuery.length === 0) {
      res.status(201).json({
        message: `the user with email ${Email} is not registered. please register`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { signUpUser, signInUser };
