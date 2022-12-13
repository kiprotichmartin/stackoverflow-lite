CREATE OR ALTER PROCEDURE dbo.postAnAnswer
  (
  @Username VARCHAR(255),
  @Description VARCHAR(255),
  @Votes INT = 0,
  @TotalComments INT = 0,
  @PreferredAnswer BIT = 0
)
AS

INSERT INTO STACKOVERFLOWLITE.dbo.Answers
  (
  [Username], [Description], [Votes], [TotalComments], [PreferredAnswer]
  )
VALUES
  (
    @Username, @Description, @Votes, @TotalComments, @PreferredAnswer
  )

GO