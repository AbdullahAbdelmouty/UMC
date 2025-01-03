const sql = require('mssql');

const getEmployees = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const result = await pool.request().query('SELECT * FROM Employees');
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const getEmployee = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Employees WHERE id = @id');
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const createEmployee = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { name, email, phone } = req.body;
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('phone', sql.NVarChar, phone)
            .query('INSERT INTO Employees (name, email, phone) VALUES (@name, @email, @phone)');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const updateEmployee = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('phone', sql.NVarChar, phone)
            .query('UPDATE Employees SET name = @name, email = @email, phone = @phone WHERE id = @id');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Employees WHERE id = @id');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

module.exports = { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee };