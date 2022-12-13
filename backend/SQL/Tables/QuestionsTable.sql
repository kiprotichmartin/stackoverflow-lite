-- Create a new table called 'Questions' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.Questions', 'U') IS NOT NULL
DROP TABLE dbo.Questions
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Questions
(
  QuestionID INT NOT NULL PRIMARY KEY,
  UserID INT /* CONSTRAINT FK_Questions */ FOREIGN KEY REFERENCES  Users(UserID),
  Username VARCHAR(255) NOT NULL,
  Avatar VARBINARY(max),
  Title VARCHAR(255) NOT NULL,
  Description VARCHAR(255) NOT NULL,
  TotalAnswers INT,
);
GO