CREATE OR ALTER PROCEDURE fetchAllQuestionsAsked(@UserID VARCHAR(255))
AS
BEGIN
  SELECT * FROM QuestionsTable WHERE UserID = @UserID
END