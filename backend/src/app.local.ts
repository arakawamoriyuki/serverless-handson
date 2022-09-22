import { createApp } from './app';

const port = 3000;

createApp().listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Competition app listening at http://localhost:${port}`);
});
