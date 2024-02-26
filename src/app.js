const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const {printHelloToYou} = require('./services/printHello');
  
  res.send(printHelloToYou());
});

module.exports = {
  app,
};