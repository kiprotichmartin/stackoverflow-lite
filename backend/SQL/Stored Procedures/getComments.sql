CREATE OR ALTER PROCEDURE getComments
  (@QuestionID VARCHAR(255))
AS
BEGIN

  SELECT *
  FROM CommentsTable
  WHERE QuestionID = @QuestionID AND isDeleted = 0;

END