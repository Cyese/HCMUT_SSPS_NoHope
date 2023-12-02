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
        // let UserData = User.find({}).then((users) => {
        //     const startDate = new Date('2022-11-01');
        //     const endDate = new Date('2022-12-01');
        //     const startHour = 9;
        //     const endHour = 17;
        //     const listOfPrinter = [
        //         '0001', '0002', '0003',
        //         '0004', '0005', '0006',
        //         '0007', '0008', '0009',
        //         '0010', '0011', '0012',
        //         '0013', '0014', '0015',
        //         '0016', '0017', '0018',
        //         '0019'
        //     ];
        //     const subjectName = [
        //         'Calculus1', 'Physics1', 'Chemistry',
        //         'Calculus2', 'Physics2', 'IntroductionToProgramming',
        //         'Calculus3', 'Physics3', 'DataStructureAndAlgorithm',
        //         'DiscreteMathematics', 'ObjectOrientedProgramming',
        //         'ComputerArchitecture', 'OperatingSystem',
        //         'DatabaseSystem', 'ComputerNetwork',
        //     ]
        //     const format = [ '.png', '.docx', '.pdf', '.pptx', '.xlsx']
        //     users.forEach((user) => {
        //         let ID = user.UserID;
        //         let Paper = user.TotalUsed;
        //         let Average = Math.floor(Paper / (Math.floor(Paper / 13)));
        //         while (Paper > 0) {
        //             let Used = Math.floor(Math.random() * (Average - 1) + 1);
        //             Paper -= Used;
        //             let PrintedBy = listOfPrinter[Math.floor(Math.random() * listOfPrinter.length)];
            
        //             let randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        //             randomDate.setHours(Math.floor(Math.random() * (endHour - startHour + 1)) + startHour);
        //             let randomDocument = subjectName[Math.floor(Math.random() * subjectName.length)] + format[Math.floor(Math.random() * format.length)];  
        //             let log = new Log({
        //                 RequestedBy: ID,
        //                 Date: randomDate,
        //                 PrintedBy: PrintedBy,
        //                 FileName: randomDocument,
        //                 PaperQuantity: Used
        //             });
        //             log.save();
        //             // console.log(randomDate);
        //         }
        //     });
        // });


        res.send("Create mock data for log");
    }
}

module.exports = new printerController();
