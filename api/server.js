const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');

app.use(express.json())
app.use(cors())
dotenv.config();


app.get('', (req, res) => {
    res.send("Welcome to the afternoon session")
})

app.listen(3000, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Server is running on PORT 3000...');
    }
});