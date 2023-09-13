const Printer = require('../models/printer');
const { multipleMongooseObject } = require('../util/mongoose');

class StudentController {
    print(req, res, next) {
        Printer.find({})
            .then((printer) => res.send(multipleMongooseObject(printer)))
            .catch(next);
    }
}

module.exports = new StudentController();
