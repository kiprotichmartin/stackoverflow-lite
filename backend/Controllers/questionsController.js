const { v4: uuidv4 } = require("uuid");
const mssql = require("mssql");
const sqlConfig = require("../config/index");

const getAllQuestions = async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const response = await pool.request().execute("getAllQuestions");
    const question = response.recordset;
    if (question.length) {
      return res.status(200).json(question);
    } else {
      res.status(404).json({ message: "no questions found in the database" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getOneQuestion = async (req, res) => {
  try {
    const { QuestionID } = req.params;
    const pool = await mssql.connect(sqlConfig);
    const question = (
      await pool
        .request()
        .input("QuestionID", mssql.VarChar, QuestionID)
        .execute("getOneQuestion")
    ).recordset;

    if (question.length) {
      res.status(200).json(question);
    } else {
      res
        .status(404)
        .json({
          "error message": `the question with id as ${QuestionID} does not exist`,
        });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const questionWithMostAnswers = async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const response = await pool.request().execute("questionWithMostAnswers");
    const question = response.recordset;
    if (question.length) {
      return res.status(200).json(question);
    } else {
      res.status(404).json({ message: "No questions found in the database" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const searchQuestions = async (req, res) => {
  try {
    const { searchTerm } = req.params;
    const pool = await mssql.connect(sqlConfig);
    const question = (
      await pool
        .request()
        .input("searchTerm", mssql.VarChar, searchTerm)
        .execute("searchQuestions")
    ).recordset;

    if (question.length) {
      res.status(200).json(question);
    } else {
      res.status(404).json({
        "error message": `the question(s) (do)es not exist`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const fetchAllQuestionsAsked = async (req, res) => {
  try {
    const { UserID } = req.params;
    const pool = await mssql.connect(sqlConfig);
    const question = (
      await pool
        .request()
        .input("UserID", mssql.VarChar, UserID)
        .execute("fetchAllQuestionsAsked")
    ).recordset;

    if (question.length) {
      res.status(200).json(question);
    } else {
      res.status(404).json({
        "error message": `seems like you have never asked a question`,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const postAQuestion = async (req, res) => {
  try {
    const QuestionID = uuidv4();
    const {
      UserID,
      Username,
      Avatar,
      Title,
      Description,
      TotalAnswers,
      isDeleted,
    } = req.body;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(`SELECT * FROM UsersTable WHERE Username = '${Username}' AND UserID = '${UserID}'`)
    ).recordset;

    if (performQuery.length > 0) {
      await pool
        .request()
        .input("QuestionID", mssql.VarChar, QuestionID)
        .input("UserID", mssql.VarChar, UserID)
        .input("Username", mssql.VarChar, Username)
        .input("Avatar", mssql.VarChar, Avatar)
        .input("Title", mssql.VarChar, Title)
        .input("Description", mssql.VarChar, Description)
        .input("TotalAnswers", mssql.Int, TotalAnswers)
        .input("isDeleted", mssql.Bit, isDeleted)
        .execute("postAQuestion");

      res
        .status(201)
        .json({ message: `the question with id ${QuestionID} has been posted successfully` });
    } else {
      res
        .status(404)
        .json({
          message: `user with Username: ${Username} and UserID ${UserID} do not match. please enter correct details`,
        });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deletetAQuestion = async (req, res) => {
  try {
    const { QuestionID } = req.params;
    const pool = await mssql.connect(sqlConfig);

    const performQuery = (
      await pool
        .request()
        .query(
          `SELECT * FROM QuestionsTable WHERE QuestionID = '${QuestionID}' AND isDeleted = 1`
        )
    ).recordset;

    if (performQuery.length > 0) {
      res.status(201).json({
        message: `the question with id ${QuestionID} cannot be deleted because it does not exist`,
      });
    } else if (performQuery.length === 0) {
      await pool
        .request()
        .input("QuestionID", mssql.VarChar, QuestionID)
        .execute("deleteAQuestion");

      res
        .status(201)
        .json({ message: "the question has been deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  questionWithMostAnswers,
  searchQuestions,
  fetchAllQuestionsAsked,
  postAQuestion,
  deletetAQuestion,
};
