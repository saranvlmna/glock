const users = require('./users')
const authController = require('../controller/auth');





const verify = async (
    accessToken,
    refreshToken,
    profile,
    callback
) => {
    const query = {
        name: profile._json.name,
        email: profile._json.email,
        picture: profile._json.picture,
        accessToken: accessToken,
        refreshToken: refreshToken,
    }
    const user = await users.loginOrsignup(query);
    return callback(null, user);
}

const serializeUser = (user, callback) => {
    return callback(null, user);
};

const deserializeUser = (user, callback) => {
    return callback(null, user);
};

const callback = (req, res) => {
    return authController.dashboard(req, res);
}

module.exports.authService = {
    verify,
    serializeUser,
    deserializeUser,
    callback
}