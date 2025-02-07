require("dotenv").config();
const jwt = require("jsonwebtoken");
exports = {}
exports.getToken =  (email,user) => {
  // assume this code is complete
  const token = jwt.sign({identifier : user._id},process.env.SECRET_KEY);
  return token;
}

module.exports = exports