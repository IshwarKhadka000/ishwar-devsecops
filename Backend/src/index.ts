import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response, Application } from 'express';

import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
import logger from './utils/logger';



dotenv.config();



const app: Application = express();

const logRequests = (req: Request, res: Response, next: Function) => {
  logger.info({ req, 'time': Date.now() });
  next();
}

app.use(logRequests);

app.use(express.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running....');
});

app.use(appRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));