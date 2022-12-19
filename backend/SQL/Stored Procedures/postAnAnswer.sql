CREATE OR ALTER PROCEDURE dbo.postAnAnswer
  (
  @AnswerID VARCHAR(255),
  @QuestionID VARCHAR(255),
  @UserID VARCHAR(255),
  @Username VARCHAR(255),
  @Description VARCHAR(255),
  @Votes INT = 0,
  @TotalComments INT = 0,
  @PreferredAnswer BIT = 0,
  @isDeleted BIT = 0
)
AS

INSERT INTO AnswersTable
  (
    [AnswerID], [QuestionID], [UserID], [Username], [Description], [Votes], [TotalComments], [PreferredAnswer], [isDeleted]
  )
VALUES
  (
    @AnswerID, @QuestionID, @UserID, @Username, @Description, @Votes, @TotalComments, @PreferredAnswer, @isDeleted
  )

GO