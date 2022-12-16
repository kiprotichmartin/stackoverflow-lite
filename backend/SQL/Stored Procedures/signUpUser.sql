CREATE OR ALTER PROCEDURE signUpUser
  (
  @UserID VARCHAR(255),
  @Username VARCHAR(255),
  @Email VARCHAR(255),
  @Password VARCHAR(255),
  @Avatar VARCHAR(255)
)
AS

INSERT INTO UsersTable
  (
    [UserID], [Username], [Email], [Password], [Avatar]
  )
VALUES
  (
    @UserID, @Username, @Email, @Password, @Avatar
  )

GO