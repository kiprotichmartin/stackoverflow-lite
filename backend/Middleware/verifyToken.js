const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res
      .status(401)
      .json({ error: "no token issued. please try again" });

  jwt.verify(token, "&m4BQF#5EDuZ@gFr&5MU^Eu", (err, user) => {
    console.log(err);

    if (err) return res.status(403).json({ error: err.message });

    req.user = user;

    next();
  });
}

module.exports = { authenticateToken };
