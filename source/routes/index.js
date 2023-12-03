const userRouter = require('./user');
const printerRouter = require('./printer');
const spsoRouter = require('./spso');
const authRouter = require('./auth');


function route(app) {
    app.use('/user', userRouter);
    app.use('/printer', printerRouter);
    app.use('/auth', authRouter);
    app.use('/spso', spsoRouter);
}

module.exports = route;
