const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const api = require('./restAPI/myAPI');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect('mongodb+srv://aj:ajmani@cluster0-c60su.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true});

// EJS
//app.engine('html', require('ejs').renderFile)
// app.use(expressLayouts); 
//app.set('view engine', 'ejs');
// app.set('view engine', 'html')

//BodyParser
//app.use(express.urlencoded({ extended: false }));

//Router
// app.use('/', require('./restAPI/myAPI'));
//app.use('/users', require('./routes/users'));





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', api)


http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On=", process.env.PORT || 3000);
