const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const cors = require("cors");
const parser = require("body-parser");
const passport = require("passport");

app.use(cors());
app.use(parser.json());

app.use("/users", userRouter);

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
