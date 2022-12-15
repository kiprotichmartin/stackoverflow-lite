CREATE OR ALTER PROCEDURE searchQuestions(@searchTerm varchar(255))
AS
BEGIN

  SELECT * FROM QuestionsTable WHERE Title LIKE '%' + @searchTerm + '%';

END