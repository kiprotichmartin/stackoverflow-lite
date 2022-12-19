CREATE OR ALTER PROCEDURE deleteAnAnswer(@AnswerID varchar(255))
AS
BEGIN
  UPDATE AnswersTable SET isDeleted = 1 WHERE AnswerID = @AnswerID
END
GO