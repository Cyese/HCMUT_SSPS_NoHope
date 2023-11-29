const userRouter = require('./user');
const printerRouter = require('./printer');

function route(app) {
    app.use('/user', userRouter);
    app.use('/printer', printerRouter);
}

module.exports = route;
