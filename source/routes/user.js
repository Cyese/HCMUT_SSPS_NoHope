const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const printer = require('../models/printer');

router.get('/getLog/:UserID', userController.getLog);
router.get('/add', userController.makeMockData);
router.get('/:UserID', userController.show);
router.post('/print',userController.print)

module.exports = router;
