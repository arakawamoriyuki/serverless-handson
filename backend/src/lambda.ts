import serverlessExpress from '@vendia/serverless-express';
import { createApp } from './app';

export const handler = serverlessExpress({ app: createApp() });
