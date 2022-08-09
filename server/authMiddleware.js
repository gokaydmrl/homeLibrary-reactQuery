const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
 

  if (token) {
    try {
      const jwtVerified = jwt.verify(token, process.env.JWT_SECRET);
      console.log("auth token", token);
      console.log("verified jwt", jwtVerified);
      req.userID = jwtVerified.id;
      next();
    } catch (error) {
      console.log("midleware error", error);
    }
  }
};
