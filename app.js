const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.all("/:timeout/**", async (req, res) => {
  const timeout = req.params.timeout;
  await wait(timeout);
  res.status(200).send(`Response after ${timeout} seconds`);
});

const port = 3001;
const wait = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
