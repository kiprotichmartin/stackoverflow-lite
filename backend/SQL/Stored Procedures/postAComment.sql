CREATE OR ALTER PROCEDURE dbo.postAComment
  (
  @CommentID VARCHAR(255),
  @AnswerID VARCHAR(255),
  @QuestionID VARCHAR(255),
  @UserID VARCHAR(255),
  @Username VARCHAR(255),
  @Description VARCHAR(255),
  @isDeleted BIT = 0
)
AS

INSERT INTO CommentsTable
  (
    [CommentID], [AnswerID], [QuestionID], [UserID], [Username], [Description], [isDeleted]
  )
VALUES
  (
    @CommentID, @AnswerID, @QuestionID, @UserID, @Username, @Description, @isDeleted
  )

GO