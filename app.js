const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp'),
    createParentPath: true,
    limits: {
      fileSize: 2 * 1024 * 1024,
    },
  })
);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/single', async (req, res, next) => {
  try {
    const file = req.files.mFile;
    const fileName = new Date().getTime().toString() + path.extname(file.name);
    const savePath = path.join(__dirname, 'public', 'uploads', fileName);
    if (file.truncated) {
      throw new Error('File size is too big.');
    }

    if (file.mimetype !== 'image/jpeg') {
      throw new Error('Only jpeg are supported.');
    }

    await file.mv(savePath);

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('Error uploading file.');
  }
});

app.post('/multiple', async (req, res, next) => {
  try {
    const files = req.files.mFiles;

    const promises = files.map((file) => {
      const fileName =
        new Date().getTime().toString() + path.extname(file.name);
      const savePath = path.join(__dirname, 'public', 'uploads', fileName);
      return file.mv(savePath);
    });

    await Promise.all(promises);

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('Error uploading file.');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
