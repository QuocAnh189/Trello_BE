import express from 'express'
import cors from 'cors'

//config
import { corsOptions } from './configs'
import { CONNECT_DB, PORT, HOST_NAME, NODE_ENV } from './configs'

//util
import { logger } from './utils'

//routes
import route from './routes'

//middlewares
import { defaultErrorHandler } from './middlewares'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())
  app.use(cors(corsOptions))
  app.use(route)
  app.use(defaultErrorHandler)

  app.listen(PORT, () => {
    logger.info(`=================================`)
    logger.info(`======= ENV: ${NODE_ENV || 'development'} =======`)
    logger.info(`🚀 App listening on http://${HOST_NAME}:${PORT}`)
    logger.info(`🚀 API Spec http://${HOST_NAME}:${PORT}/api-documentation`)
    logger.info(`=================================`)
  })
}

CONNECT_DB()
  .then(() => logger.info('Connected to MongoDb Cloud Atlas'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.log(error)
    process.exit(0)
  })
