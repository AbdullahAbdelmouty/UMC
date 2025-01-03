const sql = require('mssql');

const createUser = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { name, email, password } = req.body;
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password)
            .execute('spCreateUser');
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getUsers = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const result = await pool.request().execute('spGetUsers');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getUser = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .execute('spGetUser');
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const { name, email, password } = req.body;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password)
            .execute('spUpdateUser');
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const pool = await sql.connect(req.app.get('connection'));
        const { id } = req.params;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .execute('spDeleteUser');
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };