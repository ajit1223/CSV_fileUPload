const express = require('express');
const db = require('./config/mongoose');

const env = require('dotenv').config();

const path = require('path');
const multer = require('multer')
const app = express();
app.use(express.urlencoded({ extended: false }));
const assetsPath = path.join(__dirname, 'assets');
app.use('/assets', express.static(assetsPath));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

PORT = 8500;
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error Connecting to server!!");
        return;
    }
    console.log(`Successfully Connected to Server, at PORT,`, PORT);
});
