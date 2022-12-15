const { v4: uuidv4 } = require("uuid");
const mssql = require("mssql");
const sqlConfig = require("../config/index");

const postAnAnswer = async (req, res) => {
  try {
    const AnswerID = uuidv4();
    const { QuestionID } = req.params;
    const {
      UserID,
      Username,
      Description,
      Votes,
      TotalComments,
      PreferredAnswer,
      isDeleted,
    } = req.body;
    const pool = await mssql.connect(sqlConfig);
    await pool
      .request()
      .input("AnswerID", mssql.VarChar, AnswerID)
      .input("QuestionID", mssql.VarChar, QuestionID)
      .input("UserID", mssql.VarChar, UserID)
      .input("Username", mssql.VarChar, Username)
      .input("Description", mssql.VarChar, Description)
      .input("Votes", mssql.Int, Votes)
      .input("TotalComments", mssql.Int, TotalComments)
      .input("PreferredAnswer", mssql.Bit, PreferredAnswer)
      .input("isDeleted", mssql.Bit, isDeleted)
      .execute("postAnAnswer");

    res.status(201).json({
      message: `the answer with id ${AnswerID} has been posted successfully`,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const markPreferredAnswer = async (req, res) => {
  try {
    const { AnswerID } = req.params;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(
          `SELECT * FROM AnswersTable WHERE AnswerID = '${AnswerID}' AND PreferredAnswer = 1`
        )
    ).recordset;

    if (performQuery.length > 0) {
      await pool
        .request()
        .input("AnswerID", mssql.VarChar, AnswerID)
        .execute("markPreferredAnswer");

      res.status(201).json({
        message: `Your answer with id ${AnswerID} has been successfully de-selected as the preferred answer`,
      });
    } else if (performQuery.length === 0) {
      await pool
        .request()
        .input("AnswerID", mssql.VarChar, AnswerID)
        .execute("markPreferredAnswer");

      res.status(201).json({
        message: `Your answer with id ${AnswerID} has been successfully selected as the preferred answer`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const upvoteAnswer = async (req, res) => {
  try {
    const { AnswerID } = req.params;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(`SELECT * FROM AnswersTable WHERE AnswerID = '${AnswerID}'`)
    ).recordset;

    if (performQuery.length > 0) {
      await pool
        .request()
        .input("AnswerID", mssql.VarChar, AnswerID)
        .execute("upvoteAnswer");

      res.status(201).json({
        message: `the answer with id ${AnswerID} has been successfully upvoted`,
      });
    } else if (performQuery.length === 0) {
      res.status(404).json({
        message: `the answer with id ${AnswerID} does not exist`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const downvoteAnswer = async (req, res) => {
  try {
    const { AnswerID } = req.params;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(`SELECT * FROM AnswersTable WHERE AnswerID = '${AnswerID}'`)
    ).recordset;

    if (performQuery.length > 0) {
      await pool
        .request()
        .input("AnswerID", mssql.VarChar, AnswerID)
        .execute("downvoteAnswer");

      res.status(201).json({
        message: `the answer with id ${AnswerID} has been successfully downvoted`,
      });
    } else if (performQuery.length === 0) {
      res.status(404).json({
        message: `the answer with id ${AnswerID} does not exist`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteAnAnswer = async (req, res) => {
  try {
    const { AnswerID } = req.params;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(
          `SELECT * FROM AnswersTable WHERE AnswerID = '${AnswerID}' AND isDeleted = 1`
        )
    ).recordset;

    if (performQuery.length > 0) {
      res.status(201).json({
        message: `the answer with id ${AnswerID} cannot be deleted because it does not exist`,
      });
    } else if (performQuery.length === 0) {
      await pool
        .request()
        .input("AnswerID", mssql.VarChar, AnswerID)
        .execute("deleteAnAnswer");

      res
        .status(201)
        .json({ message: "the answer has been deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postAnAnswer,
  markPreferredAnswer,
  upvoteAnswer,
  downvoteAnswer,
  deleteAnAnswer,
};
