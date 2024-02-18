const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const {printHello} = require('./services/printHello');
  
  res.send(printHello());
});

module.exports = {
  app,
};