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
        // mock data for H1
        // let printer = new Printer({
        //     _PrinterID: '0001',
        //     _Location: 'H1-101',
        //     _PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     _PrinterID: '0002',
        //     _Location: 'H1-101',
        //     _PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     _PrinterID: '0003',
        //     _Location: 'H1-101',
        //     _PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     _PrinterID: '0004',
        //     _Location: 'H1-301',
        //     _PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     _PrinterID: '0005',
        //     _Location: 'H1-301',
        //     _PaperLeft: 1000
        // });
        // printer.save();
        // printer = new Printer({
        //     _PrinterID: '0006',
        //     _Location: 'H1-301',
        //     _PaperLeft: 1000
        // });
        // printer.save();
        // // Some mock data for H2
        // printer = new Printer({
        //     _PrinterID: '0007',
        //     _Location: 'H2-101',
        //     _PaperLeft: 1000
        // });
        // printer.save();
    //     let printer = new Printer({
    //         _PrinterID: '0008',
    //         _Location: 'H2-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     // Some mock data for H3
    //     printer = new Printer({
    //         _PrinterID: '0009',
    //         _Location: 'H3-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0010',
    //         _Location: 'H3-401',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0011',
    //         _Location: 'H3-401',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     // Some mock data for H6
    //     printer = new Printer({
    //         _PrinterID: '0012',
    //         _Location: 'H6-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0013',
    //         _Location: 'H6-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0014',
    //         _Location: 'H6-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0015',
    //         _Location: 'H6-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0016',
    //         _Location: 'H6-101',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0017',
    //         _Location: 'H6-602',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0018',
    //         _Location: 'H6-602',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     printer = new Printer({
    //         _PrinterID: '0019',
    //         _Location: 'H6-602',
    //         _PaperLeft: 1000
    //     });
    //     printer.save();
    //     res.send('Mock data created');
    }

    makeMockLog(req, res, next){
        let UserData = User.find({}).then((users) => {
            users.forEach((user) => {
                let  ID = user._UserID;
                let Used = user._TotalUsed;
                // // Use _UserID and _TotalUsed as needed
                console.log(ID, Used);
            });
        });

        res.send("Create mock data for log");
    }
}

module.exports = new printerController();
