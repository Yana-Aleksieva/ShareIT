const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js')
const {auth} = require('./middlewares/authMiddleware')
const cookie = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookie());
try {
    mongoose.connect('mongodb://localhost:27017/api');
    console.log('DB ready!');
} catch (err) {
    console.log('Error connecting to database!');
    return process.exit(1);
}

app.use(routes);
app.use(auth)

app.listen(3030, () => console.log('Server is running on port 3030'));