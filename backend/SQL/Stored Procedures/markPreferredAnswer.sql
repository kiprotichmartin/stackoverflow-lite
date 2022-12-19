CREATE OR ALTER PROCEDURE markPreferredAnswer(@AnswerID VARCHAR(255))
AS
BEGIN
  IF EXISTS (SELECT * FROM AnswersTable WHERE AnswerID = @AnswerID AND PreferredAnswer = 1)
    BEGIN
      UPDATE AnswersTable SET PreferredAnswer = 0 WHERE AnswerID = @AnswerID
    END
  ELSE
    BEGIN
      UPDATE AnswersTable SET PreferredAnswer = 1 WHERE AnswerID = @AnswerID
    END
END