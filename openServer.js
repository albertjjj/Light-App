//console.log('python3 /lightOn.py')

const http = require('http');
var app = require('express')();

const { exec } = require("child_process");

app.get('/', function(req, res){
    console.log('')
    res.sendFile(__dirname + '/index.html');
});

app.get('/on', function(req, res){
    exec("python " + __dirname + "/lightOn.py", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.sendFile(__dirname + '/onPage.html');
});

app.get('/off', function(req, res){
    exec("python " + __dirname + "/lightOff.py", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.sendFile(__dirname + '/offPage.html');
    
});

// Start the server on port 8080
app.listen(8080, '127.0.0.1');
console.log('Node server running on port 8080');