const express = require('express');

const db = require('./config/db');
const route = require('./routes');
const app = express();

// Connect DB
db.connect();

// Body parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
