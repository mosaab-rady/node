const express = require('express');

const app = express();

app.use('/second', require('./app'));
app.get('/', (req, res) => {
  res.send('Hi, I`m mosaab radi');
  res.end();
});

const port = 5000;

app.listen(port, () => {
  console.log(`app listening on port ${port}!!!`);
});
