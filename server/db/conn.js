import { MongoClient } from "mongodb";
const connectionString = process.env.MONGO_URI;
console.log(connectionString);
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getDb = async () => {
  try {
    const client = await connectToClient();
    const db = client.db("EP");
    return db;
  } catch (err) {
    return err;
  }
};

/**
 * @param {String} collection - String name of Collection
 * @returns {Object} col -
 */
const getColl = async (collection) => {
  const db = await getDb();
  try {
    const col = db.collection(collection);
    return col;
  } catch (err) {
    return err;
  }
};

const connectToClient = async () => {
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
    console.log("Successfully closed MongoDB connection.");
  } catch (err) {
    console.log("Error closing client conn");
    return err;
  }
};

export { getDb, closeClientConn, getColl };
