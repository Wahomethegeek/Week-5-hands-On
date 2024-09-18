const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');

app.use(express.json())
app.use(cors())
dotenv.config();


// app.get('', (req, res) => {
//     res.send("Welcome to the afternoon session, I am happy to be here.")
// })

// Connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD

})

// Check if connection works
db.connect((err) => {
    if(err) return console.log("Error connecting to MySQL")

    console.log("Connected to MySQL as id: ", db.threadId)

    //create database
    db.query('CREATE DATABASE IF DOES NOT EXISTS expense_tracker', (err, result) => {
        if(err) return console.log(err)

        console.log("database expense_tracker created/checked");
    })
})

app.listen(3000, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Server is running on PORT 3000...');
    }
});