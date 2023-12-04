const express = require('express');
const router = express.Router();

const authController= require('../controllers/authController')

router.post('/login', authController.login);
router.get('/signup', authController.signup);
router.get('/encrypt', authController.EncryptPassword);
// router.get('/demo', authController.DemoLogin)

module.exports = router;