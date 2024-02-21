//Imports
import { MongoClient, ObjectId } from 'mongodb';
import config from 'config';

//#region Globals
const url: string = config.get('db.url');
let client: any;
//#endregion

/**
 * A description for myFunction.
 * @param {string} param1 - The first argument to this function
 */
const connect = async () => {
  //Create new client if there isn't one
  if (!client) {
    client = new MongoClient(url);
  }

  try {
    await client.connect();
    return client.db(config.get('db.name'));
  } catch (err: any) {
    console.log(err);
  }
};

//*************************/
//** Collection Separator **/
//*************************/
//#region Collection

//#endregion

//Function Exports
export {};
