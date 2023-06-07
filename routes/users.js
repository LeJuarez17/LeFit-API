const express = require('express');
const router = express.Router();

router.get('/routines', (req, res) => {

    const data = ["usuarios"]

    res.send({data});
});

module.exports = router;
