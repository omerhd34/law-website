import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL;

if (!uri) {
 throw new Error("DATABASE_URL tanimli degil.");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
 if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri);
  globalThis._mongoClientPromise = client.connect();
 }
 clientPromise = globalThis._mongoClientPromise;
} else {
 client = new MongoClient(uri);
 clientPromise = client.connect();
}

export default clientPromise;
