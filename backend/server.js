require('dotenv').config()
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')                   

var api = require('./routes/api');
var app = express();
var mongoose = require('mongoose');
var helmet = require('helmet')


app.use(cors());
app.use(helmet());
app.set('trust proxy', 1); // trust first proxy

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false);
mongoose.connect('mongodb://localhost:27017/fundRaise', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection established');
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', api);


app.listen(3001);
