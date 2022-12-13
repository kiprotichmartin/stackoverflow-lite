-- Create a new table called 'Users' in schema 'STACKOVERFLOWLITE'
-- Drop the table if it already exists
IF OBJECT_ID('STACKOVERFLOWLITE.Users', 'U') IS NOT NULL
DROP TABLE STACKOVERFLOWLITE.Users
GO
-- Create the table in the specified schema
CREATE TABLE STACKOVERFLOWLITE.Users
(
  UserID INT NOT NULL PRIMARY KEY,
  Username VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(max) NOT NULL,
  Avatar VARBINARY(max),
);
GO