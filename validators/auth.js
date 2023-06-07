
const { check } = require('express-validator');
const validateResult = require('../utils/handleValidator');

const validatorRegisterItem = [
    check("userName").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const validatorLoginItem = [
    check("userName").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = { validatorRegisterItem, validatorLoginItem };