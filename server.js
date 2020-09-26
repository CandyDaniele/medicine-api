import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(3000, () => {
  console.log('API started');
});