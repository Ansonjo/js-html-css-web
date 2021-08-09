const express = require('express');
const productRouter = require('./product.js');
var app = express();
app.listen(8080);
app.use('/product',productRouter);