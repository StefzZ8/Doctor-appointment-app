import express from 'express';
import 'dotenv/config';
import './config/dbConfig.js';
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node server started at port ${PORT}`);
});

