const express = require('express');
const application = express();

const cors = require('cors');

const items = require('./items');

application.use(cors());

application.get('/', (req, res) => {
  res.json({ data: 'Hello world!'});
});

application.get('/posts', (req, res) => {
  res.json(items);
});

application.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = items.find((item) => item.id == postId);
  res.json(post);
});

application.listen(3001, () => console.log('Server on 3001'));
