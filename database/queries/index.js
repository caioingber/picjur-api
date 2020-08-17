const User = require("../models/user.js");

const bobby = User.create({
  username: "bobbyDOE27",
  email: "bobby922@gmail.com",
  password: "BobbyRul3z!",
  createdAt: new Date(),
  updatedAt: new Date(),
});
