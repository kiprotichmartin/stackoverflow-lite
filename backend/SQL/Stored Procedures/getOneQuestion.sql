CREATE OR ALTER PROCEDURE getOneQuestion (@QuestionID VARCHAR(255))
AS
BEGIN

  SELECT * FROM QuestionsTable WHERE QuestionID = @QuestionID AND isDeleted = 0;

END
GO

-- EXECUTE dbo.getOneQuestion 155888
-- GO