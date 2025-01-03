require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const employeeRoutes = require('./Routes/Employee');
const userRoutes = require('./Routes/Users');
const departmentRoutes = require('./Routes/Department');
const authRoutes = require('./Routes/Auth');
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


app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/department', departmentRoutes);
app.use('/api/v1/auth', authRoutes);
app.get('/api/v1/', (req, res) => {
    res.send('Welcome to the API');
});

sql.connect(config, (err) => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});