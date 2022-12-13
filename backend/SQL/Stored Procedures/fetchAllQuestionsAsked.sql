CREATE OR ALTER PROCEDURE fetchAllQuestionsAsked (@QuestionID INT)
AS
BEGIN

  SELECT * FROM STACKOVERFLOWLITE.dbo.Questions WHERE QuestionID = @QuestionID;

END