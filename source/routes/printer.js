const express = require('express');
const router = express.Router();

const printerController = require('../controllers/printerController');

router.get('/', printerController.print);
router.get('/add', printerController.makeMockData);
router.get('/test', printerController.makeMockLog);
module.exports = router;
