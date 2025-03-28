import 'dotenv/config';
import './config/dbConfig.js';
import cors from 'cors'; // Import CORS middleware
import userRoute from './routes/userRoute.js';
import express from 'express';
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/user', userRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node server started at port ${PORT}`);
});

