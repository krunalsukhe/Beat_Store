const User = require("../models/user");
// const Logger = require("../models/logger");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
// const expressJwt = require("express-jwt");
var { expressjwt: jwt1 } = require("express-jwt");
require("dotenv").config();
const crypto = require("crypto");

exports.getUser = (req, res) => {
  const id = req.auth._id;
  User.findById(id, (err, user)=>{
    if (err || !user) {
      return res.status(400).json({ message: "Couldn't find user" });
    }
    return res.json(user);
  });
}

exports.signup = (req, res) => {
  // console.log(req.body);
  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);

  // console.log(user)
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "User Already Exist ",
      });
    }
    // console.log("agydcyaqgsckhygasc")
    return res.json({email:user.email});
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  // console.log(req.body);
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }
    // console.log(user);
    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match",
      });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });
    
    return res.json({ token, user: user });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully",
  });
};

// protected routes
exports.isSignedIn =jwt1({
  secret: "Krunal",
  userProperty: "auth",
  algorithms: ["HS256"],
});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};