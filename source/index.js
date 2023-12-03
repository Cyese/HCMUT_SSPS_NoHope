const express = require('express');
const session = require('express-session')

const db = require('./config/db');
const route = require('./routes');
const app = express();


// Adding mock data for DB
const User = require('./models/user');
const Printer = require('./models/printer');
const Log = require('./models/log');

const PORT = 8080;

// Connect DB
db.connect();

// Body parser
app.use(
    express.urlencoded({
        extended: true,
    }),
    session({
        secret: 'CryingWithWebServer',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.json());

route(app);

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});


