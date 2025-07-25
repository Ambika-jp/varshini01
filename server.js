const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  res.redirect('/index.html');
});

app.post('/signup', (req, res) => {
  res.redirect('/login.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
