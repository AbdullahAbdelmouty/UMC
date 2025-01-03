const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../Controllers/Users');
router.route('/').get((req, res) => {
    res.send('Employees');
}).post((req, res) => {
    res.send('Employees');
}).patch((req, res) => {
    res.send('Employees');
}).delete((req, res) => {
    res.send('Employees');
});

module.exports = router;