const express = require('express');
const router = express.Router();

const { convert, invertConvert } = require('../controllers/apiController');

router.post('/convert', (req, res) => {
    const arabicNumber = parseInt(req.query.arabicNumber);
    res.json({response: convert(arabicNumber)});
});

router.post('/reverse', (req, res) => {
    const romanNumber = req.query.romanNumber.toUpperCase();
    res.json({response: invertConvert(romanNumber)});
});

module.exports = router;
