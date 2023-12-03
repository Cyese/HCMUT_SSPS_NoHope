const express = require('express');
const router = express.Router();
const spsoController = require('../controllers/SPSOController');

router.get('/printerHistory', spsoController.getPrinterHistoryByLocation);
router.get('/', spsoController.show);

module.exports = router;