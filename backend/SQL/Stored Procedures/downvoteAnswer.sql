CREATE OR ALTER PROCEDURE downvoteAnswer(@AnswerID VARCHAR(255))
AS
BEGIN

  UPDATE AnswersTable SET Votes = Votes - 1 WHERE AnswerID = @AnswerID

END