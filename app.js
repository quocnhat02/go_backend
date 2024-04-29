const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
