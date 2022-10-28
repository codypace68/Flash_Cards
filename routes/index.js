const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('layout', {title: 'Alphabet'})
})

router.get('/spelling', (req, res, next) => {
    res.render('./pages/spelling', {title: 'Alphabet'})
})

module.exports = router;