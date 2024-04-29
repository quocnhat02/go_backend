const express = require('express');
const createError = require('http-errors');
const User = require('../models/user.model');
const { authSchema } = require('../helpers/validation_schema');
const { signAccessToken, signRefreshToken } = require('../helpers/jwt_helper');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);

    const doesExist = await User.findOne({ email: result.email });
    if (doesExist) {
      throw createError.Conflict(`${result.email} is already been registered.`);
    }

    const user = new User(result);
    const savedUser = await user.save();
    const userId = JSON.stringify(savedUser._id);
    const accessToken = await signAccessToken(userId);
    const refreshToken = await signRefreshToken(userId);

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    const user = await User.findOne({ email: result.email });

    if (!user) {
      throw createError.NotFound('User not registered.');
    }

    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) {
      throw createError.Unauthorized('Username/Password not valid.');
    }

    const userId = JSON.stringify(user._id);
    const accessToken = await signAccessToken(userId);
    const refreshToken = await signRefreshToken(userId);

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    if (error.isJoi === true) {
      return next(createError.BadRequest('Invalid Username/Password.'));
    }
    next(error);
  }
});

router.post('/refresh-token', async (req, res, next) => {
  res.send('refresh-token route');
});

router.delete('/logout', async (req, res, next) => {
  res.send('logout route');
});

module.exports = router;
