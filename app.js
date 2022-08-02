const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('common'))

app.all('/5/**', async (req, res) => {
  console.log('Starting delay')
  await wait(5)
  console.log('Ending delay')
  res.status(200).send(`Response after ${5} seconds`);
});

app.all('/20/**', async (req, res) => {
  console.log('Starting delay')
  await wait(20)
  console.log('Ending delay')
  res.status(200).send(`Response after ${20} seconds`);
});

app.all('/60/**', async (req, res) => {
  console.log('Starting delay')
  await wait(60)
  console.log('Ending delay')
  res.status(200).send(`Response after ${60} seconds`);
});

app.all('/120/**', async (req, res) => {
  console.log('Starting delay')
  await wait(120)
  console.log('Ending delay')
  res.status(200).send(`Response after ${120} seconds`);
});

app.all('/180/**', async (req, res) => {
  console.log('Starting delay')
  await wait(180)
  console.log('Ending delay')
  res.status(200).send(`Response after ${180} seconds`);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

const wait = (s) => new Promise(resolve => setTimeout(resolve, s * 1000))