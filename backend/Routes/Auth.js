const express = require('express');
const router = express.Router();
const {signIn,signUp,signOut} = require('../Controllers/Auth');

router.route('/').get((req, res) => {
    res.send('Users');
}).post((req, res) => {
    res.send('Users');
}).patch((req, res) => {
    res.send('Users');
}).delete((req, res) => {
    res.send('Users');
});

module.exports = router;