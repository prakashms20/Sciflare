const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const User = require('../models/userModel');



const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret007",
  };
  

passport.use(new JwtStrategy(jwtOptions,(payload, done) => {
const {username} =payload
    User.findOne({ username: username }).then(    ( user) => {
        if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
        return done(null, user);
    }).catch((err)=>{
        return done(err); // Pass the error to Express for handling
    })
}));
module.exports = passport;
