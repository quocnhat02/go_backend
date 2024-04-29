const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(fileUpload());

app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/single', async (req, res, next) => {
  try {
    const file = req.files.mFile;
    const fileName = new Date().getTime().toString() + path.extname(file.name);
    const savePath = path.join(__dirname, 'public', 'uploads', fileName);
    await file.mv(savePath);

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('Error uploading file.');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
