'use strict';

const http = require('http');
const express = require('express');
const app = express();
const cron = require('node-cron');

app.get("/", (request, response) => {
  console.log(Date.now());
  response.sendStatus(200);
});
app.listen(process.env.PORT);

cron.schedule('0 */3 * * * *', () => {
  http.get('http://forest0923-line-bot-nyanko.glitch.me')
});
