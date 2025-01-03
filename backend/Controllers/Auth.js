const sql = require('mssql');

const signUp = async (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO Users (username, password) VALUES ('${username}', '${password}')`;
    try {
        await sql.query(query);
        res.status(201).send('User created');
    } catch (error) {
        res.status(500).send(error);
    }
}

const signIn = async (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM Users WHERE username = '${username}' AND password = '${password}'`;
    try {
        const result = await sql.query(query);
        if (result.recordset.length > 0) {
            res.status(200).send('User authenticated');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const signOut = async (req, res) => {
    res.status(200).send('User signed out');
}

module.exports = { signUp, signIn, signOut };