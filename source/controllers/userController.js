const Users = require('../models/user');
const { multipleMongooseObject } = require('../util/mongoose');
class userController {
    show(req, res, next) {
        Users.find({})
            .then((user) => res.send(multipleMongooseObject(user)))
            .catch(next);
    }
}

module.exports = new userController();
