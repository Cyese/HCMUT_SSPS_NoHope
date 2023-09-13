const Student = require('../models/student');
const { multipleMongooseObject } = require('../util/mongoose');
class StudentController {
    show(req, res, next) {
        Student.find({})
            .then((students) => res.send(multipleMongooseObject(students)))
            .catch(next);
    }
}

module.exports = new StudentController();
