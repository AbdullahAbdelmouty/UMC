const sql = require('mssql');

const getDepartments = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const result = await pool.request().query('SELECT * FROM Department');
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getDepartment = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Department WHERE id = @id');
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const createDepartment = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { name, location } = req.body;
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('location', sql.NVarChar, location)
            .query('INSERT INTO Department (name, location) VALUES (@name, @location)');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateDepartment = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const { name, location } = req.body;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('location', sql.NVarChar, location)
            .query('UPDATE Department SET name = @name, location = @location WHERE id = @id');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Department WHERE id = @id');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment };