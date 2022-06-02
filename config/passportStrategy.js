const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy = passportJWT.Strategy;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
    // issuer: process.env.ISSUER,
    // audience: process.env.AUDIENCE
},
    function (jwtPayload, cb) {
        try {
            return cb(null, jwtPayload)
        } catch (error) {
            return cb(error, false)
        }
    }
));