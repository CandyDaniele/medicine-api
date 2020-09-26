import express from 'express';
import { medicineRouter } from './routes/medicineRouter.js';

import { db } from './models/index.js';

(async () => {
  try{
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

app.use(medicineRouter);

app.listen(3000, () => {
  console.log('API started');
});