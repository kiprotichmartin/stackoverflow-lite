-- Create a new table called 'Questions' in schema 'STACKOVERFLOWLITE'
-- Drop the table if it already exists
IF OBJECT_ID('STACKOVERFLOWLITE.Questions', 'U') IS NOT NULL
DROP TABLE STACKOVERFLOWLITE.Questions
GO
-- Create the table in the specified schema
CREATE TABLE STACKOVERFLOWLITE.Questions
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