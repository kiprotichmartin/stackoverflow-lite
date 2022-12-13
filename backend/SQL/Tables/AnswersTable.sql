-- Create a new table called 'Answers' in schema 'STACKOVERFLOWLITE'
-- Drop the table if it already exists
IF OBJECT_ID('STACKOVERFLOWLITE.Answers', 'U') IS NOT NULL
DROP TABLE STACKOVERFLOWLITE.Answers
GO
-- Create the table in the specified schema
CREATE TABLE STACKOVERFLOWLITE.Answers
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