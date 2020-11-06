const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');
const server = express();


server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));

server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://localhost:3006');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
  const corsOptions = {
    origin: 'http://localhost:3006',
    credentials : true
  }

  server.use(cors(corsOptions));
  
server.use('/', routes);

module.exports = server;