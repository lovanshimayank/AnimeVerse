const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("PROFILE ROUTE HIT");

  try {
    console.log("AUTH HEADER:", req.headers.authorization);

    const token = req.headers.authorization.split(" ")[1];

    console.log("TOKEN:", token);

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
};