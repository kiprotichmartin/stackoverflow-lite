const { v4: uuidv4 } = require("uuid");
const mssql = require("mssql");
const sqlConfig = require("../config/index");

const postAComment = async (req, res) => {
  try {
    const CommentID = uuidv4();
    const { QuestionID, AnswerID } = req.params;
    const {
      UserID,
      Username,
      Description,
      isDeleted,
    } = req.body;
    const pool = await mssql.connect(sqlConfig);
    
    const performQuery = (
      await pool
        .request()
        .query(
          `SELECT * FROM AnswersTable WHERE Username = '${Username}' AND UserID = '${UserID}' AND QuestionID = '${QuestionID}' AND AnswerID = '${AnswerID}'`
        )
    ).recordset;

    if (performQuery.length > 0) {
      await pool
        .request()
        .input("CommentID", mssql.VarChar, CommentID)
        .input("AnswerID", mssql.VarChar, AnswerID)
        .input("QuestionID", mssql.VarChar, QuestionID)
        .input("UserID", mssql.VarChar, UserID)
        .input("Username", mssql.VarChar, Username)
        .input("Description", mssql.VarChar, Description)
        .input("isDeleted", mssql.Bit, isDeleted)
        .execute("postAComment");

      res
        .status(201)
        .json({
          message: `the comment with id ${CommentID} has been posted successfully`,
        });
    } else {
      res.status(404).json({
        message: `user with Username: ${Username} and UserID ${UserID} giving comment to answer of AnswerID ${AnswerID} of question with QuestionID ${QuestionID} do not match. please enter correct details`,
      });
    }

  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteAComment = async (req, res) => {
  try {
    const { CommentID } = req.params;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(
          `SELECT * FROM CommentsTable WHERE CommentID = '${CommentID}' AND isDeleted = 1`
        )
    ).recordset;

    if (performQuery.length > 0) {
      res.status(201).json({
        message: `the comment with id ${CommentID} cannot be deleted because it does not exist`,
      });
    } else if (performQuery.length === 0) {
      await pool
        .request()
        .input("CommentID", mssql.VarChar, CommentID)
        .execute("deleteAComment");

      res
        .status(201)
        .json({ message: "the comment has been deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { postAComment, deleteAComment };
