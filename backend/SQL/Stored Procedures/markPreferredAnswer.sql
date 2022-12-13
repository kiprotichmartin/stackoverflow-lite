CREATE OR ALTER PROCEDURE markPreferredAnswer
AS
BEGIN

  IF (@PreferredAnswer = 0) SET @PreferredAnswer = 1

END

-- EXECUTE dbo.markPreferredAnswer
-- GO