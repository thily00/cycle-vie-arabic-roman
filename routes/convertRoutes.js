const express = require('express');
const router = express.Router();

const { convert, invertConvert } = require('../controllers/convertController'); // Importe les fonctions de conversion depuis le contrôleur

router.get('/', (req, res) => {
    res.sendFile('convert.html', { root: 'views' });
});

router.get('/reverse', (req, res) => {
    res.sendFile('iconvert.html', { root: 'views' });
});

router.post('/convert', convert); // Utilise les fonctions de conversion pour les routes POST
router.post('/invert-convert', invertConvert);

module.exports = router;
