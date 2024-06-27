import { MongoClient } from "mongodb";
import  dotenv  from "dotenv";

dotenv.config()
// Mongo Running URI
const dbName = process.env.DB_NAME ;
const dbCluster = process.env.DB_CLUSTER;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
//  const localUri = `mongodb://${dbLocalCluster}/${dbName}`;
const cloudUri = `mongodb+srv://${dbUserName}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(cloudUri);
const db = client.db(dbName);
const connectToDb = async () => {
  try {
    await client.connect();
    console.log("DB Connected Successfully");
  } catch (err) {
    console.log("Error Connecting to MongoDB", err);
  }
};
export { db };

export default connectToDb;
