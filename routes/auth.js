const express = require('express');
const router = express.Router();
const { validatorRegisterItem } = require('../validators/auth');
const { registerController, loginController } = require('../controllers/auth');



router.post('/register', validatorRegisterItem, registerController);

router.post('/login', validatorRegisterItem, loginController);

module.exports = router;