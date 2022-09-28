import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import router from './routes';

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
