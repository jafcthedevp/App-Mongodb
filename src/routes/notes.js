const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-note', (req, res) => {
    const { title, description }= req.body;
    res.send('ok');
});

router.get('/notes', (req, res) => {
    res.send('Notes from database');
});

module.exports = router;