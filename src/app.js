require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes');

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connection has been etablished successfully');
    })
    .catch((error) => {
        console.error('Unable to connect database: ', error);
    });

app.get('/', (req, res) => {
    res.send('Test CV');
});

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
