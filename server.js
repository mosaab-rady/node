const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world!!');
  res.end();
});

const port = 5000;

app.listen(port, () => {
  console.log(`app listening on port ${port}!!!`);
});
