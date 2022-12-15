CREATE OR ALTER PROCEDURE getAllQuestions
AS
BEGIN

  SELECT * FROM QuestionsTable WHERE isDeleted = 0;

END

-- EXECUTE dbo.getAllQuestions
-- GO