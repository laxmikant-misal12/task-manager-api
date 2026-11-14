const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized, token invalid or expired");
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(401);
      throw new Error("Not authorized, user no longer exists");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { protect };