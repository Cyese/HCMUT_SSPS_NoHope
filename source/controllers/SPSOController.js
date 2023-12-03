const User = require('../models/user');
const Printer = require('../models/printer');
const Logs = require('../models/log');
const { multipleMongooseObject } = require('../util/mongoose');
const { now } = require('mongoose');

class SPSOController {
    async getPrinterHistoryByLocation(req, res) {
        try {
            const location = req.body.location || "H1-101";
            const printerIDs = await Printer.find({ Location: location }).then(printers => printers.map(printer => printer.PrinterID));

            const logsByPrinter = {};
            for (const printerID of printerIDs) {
                const logs = await Logs.find({ PrintedBy: printerID }).sort({ Date: -1 }).limit(10); // Sort logs by descending date and limit to 10 records
                logsByPrinter[printerID] = logs.map(log => ({
                    RequestedBy: log.RequestedBy,
                    Date: log.Date.toISOString().split("T")[0],
                    FileName: log.FileName,
                    PaperQuantity: log.PaperQuantity
                }));
            }
            res.status(200).send(logsByPrinter);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }

    async show(req, res) {
        try {
            const now = new Date();
            const month = now.getMonth()-1;
            const year = now.getFullYear();
            const startDate = new Date(year, month, 1);
            const endDate = new Date(year, month + 1, 0);
            const logs = await Logs.find({
                Date: {
                    $gte: startDate,
                    $lte: endDate
                }
            });
            const paper = logs.map(log => log.PaperQuantity);
            const sumOfPaper = paper.reduce((total, currentValue) => total + currentValue, 0);
            const count = paper.length;
            res.status(200).send({ "count": count, "totalPrintedPaper": sumOfPaper });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }

}

module.exports = new SPSOController();
