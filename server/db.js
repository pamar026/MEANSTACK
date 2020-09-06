//start the program
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "",
    database: "user"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})


// port = 5000
// var sql = require("mssql");
// const connection =
//     // connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         console.log("mssql connected")

//         });
    
// connection.connect(port, function () {
//     console.log(`Server is running on port : ${port}`);
// });

module.exports = connection;

