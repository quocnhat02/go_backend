const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const authRoute = require('./routes/auth.route');
const { verifyAccessToken } = require('./helpers/jwt_helper');

require('dotenv').config();
require('./helpers/init_mongodb');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan('dev'));

app.get('/', verifyAccessToken, async (req, res, next) => {
  res.json('Hello from express.');
});

app.use('/auth', authRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
