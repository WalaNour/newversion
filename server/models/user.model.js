const {
  hasLifecycleHook,
} = require("@angular/compiler/src/lifecycle_reflector");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
