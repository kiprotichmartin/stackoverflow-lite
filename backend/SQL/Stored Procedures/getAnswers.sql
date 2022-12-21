CREATE OR ALTER PROCEDURE getAnswers
  (@QuestionID VARCHAR(255))
AS
BEGIN

  SELECT *
  FROM AnswersTable
  WHERE QuestionID = @QuestionID AND isDeleted = 0;

END