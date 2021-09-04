const express = require('express');
const bodyParser = require('body-parser');

const staffRoutes = require('./routes/staffs');
const departmentRoutes = require('./routes/departments');
const staffsSalaryRoutes = require('./routes/staffsSalary');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use('/staffs', staffRoutes);
app.use('/departments', departmentRoutes);
app.use('/staffsSalary', staffsSalaryRoutes);

app.listen(8080);