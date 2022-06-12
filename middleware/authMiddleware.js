var passportJWT = require("passport-jwt");
var passport = require("passport");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
opts.issuer = process.env.ISSUER;
opts.audience = process.env.AUDIENCE;


