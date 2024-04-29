const Jwt = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '1h',
        issuer: 'lightcodese.com',
        audience: userId,
      };
      Jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          return reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
};
