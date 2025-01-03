const express = require('express');
const router = express.Router();
const {getEmployee,getEmployees,createEmployee,deleteEmployee,updateEmployee} = require('../Controllers/Employee');

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
