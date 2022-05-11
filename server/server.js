import dotenv from 'dotenv';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import commentsRoutes from './routes/comments.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use('/comments', commentsRoutes);

app.get('/', function (req, res) {
  res.send('Plate.io API');
});

app.listen(PORT);
