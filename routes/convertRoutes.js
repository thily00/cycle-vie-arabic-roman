const express = require('express');
const router = express.Router();

const { convert, invertConvert } = require('../controllers/convertController');

router.get('/', (req, res) => {
    res.sendFile('convert.html', { root: 'views' });
});

router.get('/reverse', (req, res) => {
    res.sendFile('iconvert.html', { root: 'views' });
});

router.post('/convert', convert); 
router.post('/invert-convert', invertConvert);

module.exports = router;
