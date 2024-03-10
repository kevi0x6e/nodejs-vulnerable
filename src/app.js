const express = require('express');
const bodyParser = require('body-parser');

const {printHelloToYou} = require('./services/printHello');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const helloMessage = printHelloToYou();
  res.json(helloMessage);
});

module.exports = {
  app,
};