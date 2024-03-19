import { MongoClient, ServerApiVersion } from 'mongodb';

//env
import { MONGO_URI, DBNAME } from './env.config';

let trelloDatabaseInstance = null;

const mongoClientInstance = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();
  trelloDatabaseInstance = mongoClientInstance.db(DBNAME);
  return trelloDatabaseInstance;
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error('Must connect to Database first');
  }
  return trelloDatabaseInstance;
};
