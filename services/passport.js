const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = require("../models/User");

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(response => {
        if (response) {
          // TODO: sign in page
          console.log("exist!");
        } else {
          new User({ googleId: profile.id }).save();
        }
      });
    }
  )
);
