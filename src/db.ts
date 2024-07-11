import { Database, Service, ServiceOptions, IDocument } from '@paralect/node-mongo';

import { DB_NAME } from './app.constants';

const CONNECTION_STRING = 'mongodb+srv://qwerty123:qwerty123@mongodb-lection.nftaxx8.mongodb.net/?retryWrites=true&w=majority&appName=Mongodb-lection';

const database = new Database(CONNECTION_STRING, DB_NAME);

database.connect();

class CustomService<T extends IDocument> extends Service<T> {
  // You can add new methods or override existing here
}

function createService<T extends IDocument>(collectionName: string, options: ServiceOptions = {}) {
  return new CustomService<T>(collectionName, database, options);
}

export default {
  database,
  createService,
};
