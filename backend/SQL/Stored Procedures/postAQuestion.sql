CREATE OR ALTER PROCEDURE dbo.postAQuestion
  (
  @Username VARCHAR(255),
  @Avatar VARBINARY(max),
  @Title VARCHAR(255),
  @Description VARCHAR(255),
  @TotalAnswers INT = 0
)
AS

INSERT INTO STACKOVERFLOWLITE.dbo.Questions
  (
  [Username], [Avatar], [Title], [Description], [TotalAnswers]
  )
VALUES
  (
    @Username, @Avatar, @Title, @Description, @TotalAnswers
  )

GO