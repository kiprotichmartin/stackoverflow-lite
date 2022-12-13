CREATE OR ALTER PROCEDURE dbo.postAComment
  (
    @Username VARCHAR(255),
    @Description VARCHAR(255)
  )
AS

INSERT INTO STACKOVERFLOWLITE.dbo.Comments
  (
  [Username], [Description]
  )
VALUES
  (
    @Username, @Description
  )

GO