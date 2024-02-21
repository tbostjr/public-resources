/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoClient, ObjectId } from 'mongodb';
import debug from 'debug';
import config from 'config';
import moment from 'moment';

const url: string = config.get('db.url');
let client: any;

const connect = async () => {
  if (!client) {
    client = new MongoClient(url);
  }

  try {
    await client.connect();
    return client.db(config.get('db.name'));
  } catch (err: any) {
    debug(err);
  }
};

//*************************/
//** **/
//*************************/



export {
};
