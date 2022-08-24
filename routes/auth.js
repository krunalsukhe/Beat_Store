var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signin, signup, signout, requestPasswordReset, resetPassword, isSignedIn, verifyEmail, sendMail, getUser } = require("../controllers/auth");

router.post(
  "/signup",
  signup
);

router.post(
  "/signin",
  signin
);

router.get("/signout", signout);


module.exports = router;