CREATE OR ALTER PROCEDURE getAllQuestions (@QuestionID INT)
AS
BEGIN

  SELECT * FROM QuestionsTable WHERE QuestionID = @QuestionID;

END

-- EXECUTE dbo.getOneQuestion
-- GO