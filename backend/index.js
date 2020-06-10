const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
const router = require('./router');
const storageConfig = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     console.log('dest');
    //     cb(null, './images/');
    // },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const PORT = process.env.PORT || 5000;
const app = express();
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
    .use(express.static(path.join(__dirname, 'public')))
    .use(multer().single("tagImage"))
    // .use(multer().single())
    .use(router)
    .use(bodyParser.json())
    .get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })
    .listen(PORT, () => {
        console.log(`Listening on ${ PORT }`);
    });

