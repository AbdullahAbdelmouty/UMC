const express = require('express');
const router = express.Router();
const { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } = require('../Controllers/Departments');

router.route('/').get((req, res) => {
    res.send('Departments');
}).post((req, res) => {
    res.send('Departments');
}).patch((req, res) => {
    res.send('Departments');
}).delete((req, res) => {
    res.send('Departments');
});

module.exports = router;