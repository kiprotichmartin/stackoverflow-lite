CREATE OR ALTER PROCEDURE deleteAQuestion(@QuestionID varchar(255))
AS
BEGIN
  UPDATE QuestionsTable SET isDeleted = 1 WHERE QuestionID = @QuestionID
END
GO