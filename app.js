const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const authRoute = require('./routes/auth.route');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use('/auth', authRoute);

app.get('/', async (req, res, next) => {
  res.send('Hello from express.');
});

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
