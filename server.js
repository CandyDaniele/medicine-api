import express from 'express';
import { medicineRouter } from './routes/medicineRouter.js';

const app = express();

app.use(medicineRouter);

app.listen(3000, () => {
  console.log('API started');
});