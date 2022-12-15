CREATE OR ALTER PROCEDURE deleteAComment(@CommentID varchar(255))
AS
BEGIN
  UPDATE CommentsTable SET isDeleted = 1 WHERE CommentID = @CommentID
END
GO