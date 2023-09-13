const studentRouter = require('./student');
const printerRouter = require('./printer');

function route(app) {
    app.use('/student', studentRouter);
    app.use('/printer', printerRouter);
}

module.exports = route;
