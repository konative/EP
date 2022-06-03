import { MongoClient } from "mongodb";
const connectionString = process.env.MONGO_URI;
console.log(connectionString);
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//@param {String} db - String name of DB
const getDb = async (db) => {
  try {
    const client = await connectToServer();
    const dbConnection = client.db(db);
    return dbConnection;
  } catch (err) {
    return err;
  }
};

const connectToServer = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB.");
    return client;
  } catch (err) {
    console.log("Could not connect to MongoDB Cluster");
    return err;
  }
};

const closeClientConn = async () => {
  try {
    await client.close();
  } catch (err) {
    console.log("Error closing client conn");
    return err;
  }
};

export { getDb, closeClientConn };
