const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const {printHelloToYou} = require('./services/printHello');
  
  res.send(printHelloToYou());
});

module.exports = {
  app,
};