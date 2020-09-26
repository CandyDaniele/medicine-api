import express from 'express';
import { medicineRouter } from './routes/medicineRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();

const app = express();

app.use(cors());

app.use(medicineRouter);

app.listen(process.env.PORT || 8081, () => {
  console.log('API started');
});
