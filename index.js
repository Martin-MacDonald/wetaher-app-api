const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/shopping', (req, res) => {
  res.json([{
    item: 'Soya Milk',
    for: 'Martin'
  },
  {
    item: 'Tofu',
    for: 'Martin',
  },
  {
    item: 'Noodles',
    for: 'Susan'
  },
  {
    item: 'Houmus',
    for: 'Susan'
  }]);
});

app.post('/shopping', (req, res) => {
  res.send('Put')
});

app.patch('/shopping', (req, res) => {
  res.send('Patch');
});

app.delete('/shopping', (req, res) => {
  res.send('Deleted');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//https://blooming-coast-14113.herokuapp.com/