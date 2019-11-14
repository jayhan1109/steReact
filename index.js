const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
