const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getLog', userController.getLog);
router.get('/add', userController.makeMockData);
router.get('/', userController.show);


module.exports = router;
