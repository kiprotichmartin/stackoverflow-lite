-- Create a new table called 'Comments' in schema 'STACKOVERFLOWLITE'
-- Drop the table if it already exists
IF OBJECT_ID('STACKOVERFLOWLITE.Comments', 'U') IS NOT NULL
DROP TABLE STACKOVERFLOWLITE.Comments
GO
-- Create the table in the specified schema
CREATE TABLE STACKOVERFLOWLITE.Comments
(
  CommentID INT NOT NULL PRIMARY KEY,
  UserID INT /* CONSTRAINT FK_Comments */ FOREIGN KEY REFERENCES  Users(UserID),
  QuestionID INT /* CONSTRAINT FK_Comments */ FOREIGN KEY REFERENCES  Questions(QuestionID),
  AnswerID INT /* CONSTRAINT FK_Comments */ FOREIGN KEY REFERENCES  Answers(AnswerID),
  Username VARCHAR(255) NOT NULL,
  Description VARCHAR(255) NOT NULL,
);
GO