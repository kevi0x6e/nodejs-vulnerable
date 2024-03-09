const express = require('express');
const {printHelloToYou} = require('./services/printHello');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const helloMessage = printHelloToYou();
  res.json(helloMessage);
});

module.exports = {
  app,
};