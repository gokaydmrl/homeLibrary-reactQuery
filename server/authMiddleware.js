const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.startsWith("Bearer")
  //   )
  try {
    const token = req.headers.authorization.split(" ")[1];
    const jwtVerified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verified jwt", jwtVerified);
    console.log("jwtveryfied", jwtVerified);
    req.userID = jwtVerified.id;
    next();
  } catch (error) {
    console.log("middleware error", error);
  }
};
