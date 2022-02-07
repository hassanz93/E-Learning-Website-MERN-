const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    console.log(token)
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = verified.user;
    console.log(user._id)
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

module.exports = auth;