-- Create a new table called 'Answers' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.Answers', 'U') IS NOT NULL
DROP TABLE dbo.Answers
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Answers
(
  AnswerID INT NOT NULL PRIMARY KEY,
  QuestionID INT /* CONSTRAINT FK_Answers */ FOREIGN KEY REFERENCES  Questions(QuestionID),
  UserID INT /* CONSTRAINT FK_Answers */ FOREIGN KEY REFERENCES  Users(UserID),
  Username VARCHAR(255) NOT NULL,
  Description VARCHAR(255) NOT NULL,
  Votes INT,
  TotalComments INT,
  PreferredAnswer BIT,
);
GO