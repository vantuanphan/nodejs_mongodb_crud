const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3333;

const route = require('./routes/index');
const db = require('./config/db');

// DB connection
db.connect();

// Config dotenv
dotenv.config();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// use middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/resources/views/layouts/',
    partialsDir: __dirname + '/resources/views/partials/',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
