const Users = require('../models/user');
const Logs = require('../models/log');
const Printer = require('../models/printer');
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
    async print(req, res, next) {
        const data = {
            user_id: req.body.id,
            printer_id: req.body.printer_id,
            file_name: req.body.file_name,
            file_page: req.body.file_page
        };
    
        try {
            const user = await Users.findOne({ ID: data.user_id });
            const printer = await Printer.findOne({ ID: data.printer_id });
    
            if (user._PaperLeft < data.file_page) {
                return res.status(409).send('User not enough paper left');
            }
    
            if (printer._PaperLeft < data.file_page) {
                return res.status(409).send('Printer not enough paper left');
            }
    
            // Update user and printer data
            await Users.updateOne({ ID: data.user_id }, {
                $inc: {
                    _PaperLeft: -data.file_page,
                    _TotalUsed: data.file_page
                }
            });
    
            await Printer.updateOne({ ID: data.printer_id }, {
                $inc: {
                    _PaperLeft: -data.file_page
                }
            });
    
            // Create log entry
            const log = new Log({
                id: mongoose.Types.ObjectId(),
                RequestedBy: user._UserId,
                PrintedBy: printer._PrinterID,
                Date: new Date(),
                FileName: data.file_name,
                PaperQuantity: data.file_page
            });
    
            // Save log entry to the database
            await log.save();
    
            res.status(201).send('Printed successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}

module.exports = new userController();
