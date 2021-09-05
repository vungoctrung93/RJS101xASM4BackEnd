const express = require('express');
const bodyParser = require('body-parser');

// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('./sslcert/selfsigned.key', 'utf8');
// var certificate = fs.readFileSync('./sslcert/selfsigned.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};


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

app.use('/', staffRoutes);
app.use('/staffs', staffRoutes);
app.use('/departments', departmentRoutes);
app.use('/staffsSalary', staffsSalaryRoutes);


// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

app.listen(8080);
// httpsServer.listen(8443);