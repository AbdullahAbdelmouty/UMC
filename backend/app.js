require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,  // enable encryption
        trustServerCertificate: true  // disable SSL certificate validation
    }
};

app.use(cors());
app.use(bodyParser.json());

sql.connect(config, (err) => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});