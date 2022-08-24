const mongoose = require('mongoose');
const crypto = require("crypto");
const uuidv1 = require('uuid').v1;
const UserSchema = new mongoose.Schema({


    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: String,
    encry_password: {
        type: String,
        required: true
    }
});

UserSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

UserSchema.methods = {
  autheticate: function (plainpassword) {
    const temp=this.securePassword(plainpassword);
    // console.log("2222"+temp);
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model('User' , UserSchema);