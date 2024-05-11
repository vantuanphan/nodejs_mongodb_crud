const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3333;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/admin', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})