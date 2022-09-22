import express from 'express';
import { getHelloworld } from './routes/api/helloworld';

export const createApp = () => {
  const app = express();

  app.get('/api/helloworld', getHelloworld);

  return app;
};
