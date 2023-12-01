const Printer = require('../models/printer');
const User = require('../models/user');
const Log = require('../models/log');
const { multipleMongooseObject } = require('../util/mongoose');

class printerController {
    print(req, res, next) {
        Printer.find({})
            .then((printer) => res.send(multipleMongooseObject(printer)))
            .catch(next);
    }
    makeMockData(req, res, next){
        res.send("Create mock data for printer")
        // // mock data for H1
        // let printer = new Printer({
        //     PrinterID: '0001',
        //     Location: 'H1-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0002',
        //     Location: 'H1-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0003',
        //     Location: 'H1-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0004',
        //     Location: 'H1-301',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0005',
        //     Location: 'H1-301',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0006',
        //     Location: 'H1-301',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // // Some mock data for H2
        // printer = new Printer({
        //     PrinterID: '0007',
        //     Location: 'H2-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0008',
        //     Location: 'H2-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // // Some mock data for H3
        // printer = new Printer({
        //     PrinterID: '0009',
        //     Location: 'H3-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0010',
        //     Location: 'H3-401',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0011',
        //     Location: 'H3-401',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // // Some mock data for H6
        // printer = new Printer({
        //     PrinterID: '0012',
        //     Location: 'H6-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0013',
        //     Location: 'H6-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0014',
        //     Location: 'H6-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0015',
        //     Location: 'H6-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0016',
        //     Location: 'H6-101',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0017',
        //     Location: 'H6-602',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0018',
        //     Location: 'H6-602',
        //     PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     PrinterID: '0019',
        //     Location: 'H6-602',
        //     PaperLeft: 1000
        // });
        // printer.save();
        res.send('Mock data created');
    }

    makeMockLog(req, res, next){
        let UserData = User.find({}).then((users) => {
            users.forEach((user) => {
                let  ID = user.UserID;
                let Used = user.TotalUsed;



                console.log(ID, Used);
            });
        });

        res.send("Create mock data for log");
    }
}

module.exports = new printerController();
