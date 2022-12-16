const { v4: uuidv4 } = require("uuid");
const mssql = require("mssql");
const sqlConfig = require("../config/index");

const signUpUser = async (req, res) => {
  try {
    const UserID = uuidv4();
    const {
      Username,
      Email,
      Password,
      Avatar
    } = req.body;
    const pool = await mssql.connect(sqlConfig);
    await pool
      .request()
      .input("UserID", mssql.VarChar, UserID)
      .input("Username", mssql.VarChar, Username)
      .input("Email", mssql.VarChar, Email)
      .input("Password", mssql.VarChar, Password)
      .input("Avatar", mssql.VarChar, Avatar)
      .execute("signUpUser");

    res
      .status(201)
      .json({
        message: `the user with id ${QuestionID} has been registered successfully`,
      });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const signInUser = async (req, res) => {
  
};


module.exports = { signUpUser, signInUser };
