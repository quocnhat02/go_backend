const Jwt = require('jsonwebtoken');
const createError = require('http-errors');
const client = require('./init_redis');

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '15s',
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

  verifyAccessToken: (req, res, next) => {
    if (!req.headers['authorization']) {
      return next(createError.Unauthorized());
    }

    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];
    Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        const message =
          err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
        return next(createError.Unauthorized(message));
      }
      req.payload = payload;
      next();
    });
  },

  signRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.REFRESH_TOKEN_SECRET;
      const options = {
        expiresIn: '30s',
        issuer: 'lightcodese.com',
        audience: userId,
      };
      Jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          return reject(createError.InternalServerError());
        }

        client
          .SET(userId, token, { EX: 30 })
          .then(() => {
            resolve(token);
          })
          .catch((err) => {
            console.log(err.message);
            reject(createError.InternalServerError());
            return;
          });
      });
    });
  },

  verifyRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      Jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, payload) => {
          if (err) {
            return reject(createError.Unauthorized());
          }

          const userId = payload.aud;
          client
            .GET(userId)
            .then((result) => {
              if (refreshToken === result) return resolve(userId);
              reject(createError.Unauthorized());
            })
            .catch((err) => {
              console.log(err.message);
              reject(createError.InternalServerError());
              return;
            });
        }
      );
    });
  },
};
