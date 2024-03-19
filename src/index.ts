import express from 'express';
import { CONNECT_DB, GET_DB, CLOSE_DB, PORT, HOST_NAME, NODE_ENV } from './configs';
import { logger } from './utils';

const START_SERVER = () => {
  const app = express();

  // app.get("/", async (req, res) => {
  //   console.log(await GET_DB().listCollections().toArray());
  // });

  app.listen(PORT, () => {
    logger.info(`=================================`);
    logger.info(`======= ENV: ${NODE_ENV || 'development'} =======`);
    logger.info(`🚀 App listening on http://${HOST_NAME}:${PORT}`);
    logger.info(`🚀 API Spec http://${HOST_NAME}:${PORT}/api-documentation`);
    logger.info(`=================================`);
  });
};

CONNECT_DB()
  .then(() => logger.info('Connected to MongoDb Cloud Atlas'))
  .then(() => START_SERVER())
  .catch(error => {
    console.log(error);
    process.exit(0);
  });
