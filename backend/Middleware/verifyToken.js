const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res
      .status(401)
      .json({ error: "no token issued. please try again" });

  jwt.verify(token, /*"&m4BQF#5EDuZ@gFr&5MU^Eu",*/ process.env.JWT_TOKEN, (err, user) => {

    if (err) return res.status(403).json({ error: err.message });

    req.user = user;

    next();
  });
}

module.exports = { authenticateToken };
