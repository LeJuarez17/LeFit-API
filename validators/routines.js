
// const {check, validationResult} = require('express-validator');

// const validatatorCreateItem = [
//     check("name").exists().notEmpty,

//     (req, res, next) => {
//         try {
//             validationResult(req).throw();
//             next();
//         } catch (error) {
//             res.status(400).send({ error: error.array() });
//         }
//     }
// ]

// module.exports = { validatatorCreateItem };