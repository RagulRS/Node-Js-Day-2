import mongoose from "mongoose";
const dbName = "test";
const dbLocalCluster ="localhost:27017"
const dbCluster = "cluster0.9eajjlf.mongodb.net";
const dbUserName = "ragulsingh6245";
const dbPassword = "yellowflash";
//  const localUri = `mongodb://${dbLocalCluster}/${dbName}`;
const cloudUri = `mongodb+srv://${dbUserName}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority&appName=Cluster0`;

const mongooseConnect = async () => {
  try {
    await mongoose.connect(cloudUri);
    console.log("Mongoose Connection established");
  } catch (e) {
    console.log("Mongoose Connection error: " + e.message);
    process.exit(1);
  }
};
export default mongooseConnect;
