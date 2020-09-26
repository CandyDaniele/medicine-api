import express from 'express';
import controller from '../controllers/medicineController.js';

const app = express();

app.get('/medicines', controller.getMedicines);

export { app as medicineRouter};
