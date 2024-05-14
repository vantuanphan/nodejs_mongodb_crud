const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3333;

const route = require('./routes/index');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// use middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});