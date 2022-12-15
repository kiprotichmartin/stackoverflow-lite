CREATE OR ALTER PROCEDURE dbo.postAQuestion
  (
  @QuestionID VARCHAR(255),
  @UserID VARCHAR(255),
  @Username VARCHAR(255),
  @Avatar VARCHAR(255),
  @Title VARCHAR(255),
  @Description VARCHAR(255),
  @TotalAnswers INT = 0,
  @isDeleted BIT = 0
)
AS

INSERT INTO QuestionsTable
  (
  [QuestionID], [UserID], [Username], [Avatar], [Title], [Description], [TotalAnswers], [isDeleted]
  )
VALUES
  (
    @QuestionID, @UserID, @Username, @Avatar, @Title, @Description, @TotalAnswers, @isDeleted
  )

GO