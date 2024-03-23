const express = require('express');
const {printHelloToYou} = require('./services/printHello');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  let helloMessage = printHelloToYou();
  res.send(`Hello`);
});

module.exports = {
  app,
};
