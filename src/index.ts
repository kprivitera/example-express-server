import express from 'express';
import router from './routes';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import requestLoggerMiddleware from './middleware/log-to-console';

const app = express();
const port = 3002;

// Request middleware
app.use(bodyParser.json()); // using bodyParser to parse JSON bodies into JS objects
app.use(requestLoggerMiddleware);
app.use('/', router);

// Response middleware
app.use(helmet()); // adding Helmet to enhance your API's security
app.use(cors()); // enabling CORS for all requests

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
