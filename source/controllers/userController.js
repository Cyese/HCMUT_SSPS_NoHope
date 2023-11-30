const Users = require('../models/user');
const { multipleMongooseObject } = require('../util/mongoose');
class userController {
    show(req, res, next) {
        Users.find({})
            .then((user) => res.send(multipleMongooseObject(user)))
            .catch(next);
    }
    makeMockData(req, res, next) {
        for (let i = 0; i < 20; i++) {
            let randomPaperLeft = Math.floor(Math.random() * 1000);
            let user = new Users({
                _UserID: '21' + Math.random().toString().substr(2, 5),
                _password: '123456',
                _Name: 'Nguyen Van A',
                _PaperLeft: randomPaperLeft,
                _TotalUsed: 1000 - randomPaperLeft
            });
            user.save();
        }
        res.send('Create mock data for user');
    }
}

module.exports = new userController();
