CREATE PROCEDURE questionWithMostAnswers
AS
BEGIN
  SELECT TOP 1
  QuestionsTable.QuestionID, QuestionsTable.UserID, QuestionsTable.Username, QuestionsTable.Avatar,
  QuestionsTable.Title, QuestionsTable.Description, QuestionsTable.TotalAnswers, QuestionsTable.isDeleted
  FROM QuestionsTable JOIN AnswersTable
  ON QuestionsTable.QuestionID = AnswersTable.QuestionID
  ORDER BY QuestionsTable.TotalAnswers DESC
END
GO