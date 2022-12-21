export function AuthHelper() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userid = JSON.parse(sessionStorage.getItem("userid"));
  const username = JSON.parse(sessionStorage.getItem("username"));

  if (username && userid && token) {
    return { "authorization": token, UserID: userid, Username: username};
  } else {
    return {};
  }
}
