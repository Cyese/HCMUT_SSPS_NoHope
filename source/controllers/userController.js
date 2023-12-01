const Users = require('../models/user');
const Logs = require('../models/log');
const { multipleMongooseObject } = require('../util/mongoose');
class userController {
    show(req, res, next) {
        Users.find({})
            .then((user) => res.send(multipleMongooseObject(user)))
            .catch(next);
    }
    getLog(req, res) {
        const userID = req.body.userID
        if(!userID) return res.sendStatus(400)
        Logs.find({ RequestedBy: userID})
            .then((log) => res.send(multipleMongooseObject(log)))
            .catch(err => res.send({message: err}))
    }
    makeMockData(req, res, next) {
        /*for (let i = 0; i < 20; i++) {
            let randomPaperLeft = Math.floor(Math.random() * 1000);
            let randomBirthdate = new Date(
                Date.UTC(2003, 0, 1) + Math.random() * (Date.UTC(2004, 0, 1) - Date.UTC(2003, 0, 1))
            );

            let id = '21' + Math.random().toString().substr(2, 5);
            let user = new Users({
                UserID: id,
                password: '123456',
                Name: 'Nguyen Van A',
                PaperLeft: randomPaperLeft,
                TotalUsed: 1000 - randomPaperLeft,
                Birthdate: randomBirthdate.toISOString().split('T')[0],
                ContactNumber: + Math.floor(Math.random()).toString().substring(2, 11),
                Email: 'SV_'+ id+'@hcmut.edu.vn'
            });
            user.save();
        }*/
        Users.find({})
            .then((user) => res.send(multipleMongooseObject(user)))
            .catch(next);
    }
}

module.exports = new userController();
