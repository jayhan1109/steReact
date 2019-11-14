const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// http://localhost:5000/auth/google/callback?code=4%2FtAHokcvj1X1nAQkMkHmn68VR4pIBr6I1nFIiwqIWyc_ErRLuVXmGYF6khO8MoK9FyJ-2kWbkEdhr3GcQJ2kdPa0&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&session_state=491b1a58218f0fe97667e859dbfc6b5f7eb77c59..2f0f&prompt=consent#
