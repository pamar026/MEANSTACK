//start the program
var express = require('express');
var app = express();
var config = require('./connection')
var cors = require('cors');
app.use(cors());
port = 5000

app.get('/', function (req, res) {

    var sql = require("mssql");

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records

        request.query("select * From orders where OrderId = 1000", function (err, recordset) {            
            if  (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

let server = app.listen(port, function () {
    console.log(`Server is running on port : ${port}`);
});