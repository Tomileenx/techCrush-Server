// Step1: Import the express module
const express = require('express');

// Step2: Create an Express application instance
const app = express();

const studentInfo = [
    {name: "Alice", age: "20", grade: "A"},
    {name: "Bob", age: "21", grade: "B"},
    {name: "Charlie", age: "22", grade: "C"},
];

app.get('/all-students', (req, res) => {
    res.json(studentInfo[0]);
});


// Step3: Define a route handler for GET requests to /
app.get('/', function(req, res) {
    res.send('Hello World, Welcome to Express.js!');
});

app.get('/about', (req, res) => {
    res.send("This is the about page")
});

app.get('/contact', (req, res) => {
    res.send("This is the contact page")
});

// body parser -enables the post, patch put, converts data into understandable for the server
app.use(express.json());

// Step4: Start listening on port 3000
app.listen(3000, function() {
    console.log('Server is up and running');
});

