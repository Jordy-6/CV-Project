const express = require('express');

const authRouter = require('./auth');
const cvRouter = require('./cv');
const userRouter = require('./user');
const recommendationRouter = require('./recommendation');

const app = express();

app.use('/cv', cvRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/recommendation', recommendationRouter);

module.exports = app;
