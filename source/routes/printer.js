const express = require('express');
const router = express.Router();

const printerController = require('../controllers/printerController');

router.get('/', printerController.print);

module.exports = router;
