const { MongoClient } = require("mongodb");

// Replace the following with values for your environment.
const username = encodeURIComponent("Freddy");
const password = encodeURIComponent("FPmt5526");
const clusterUrl = "clusterbank.5fkz2.mongodb.net/Banedger_DB";

const authMechanism = "SCRAM-SHA-256";

// Replace the following with your MongoDB deployment's connection string.
const uri =
  `mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the server
async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function search(query) {
  try {
    // Connect the client to the server
    await client.connect();

    // Define Parameters
    const database = client.db('Banedger_DB');
    const collection = database.collection('users');
    // Query the data needed
    const document = await collection.findOne(query);
    console.log(document);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

function data (query){
  search(query).catch(console.dir);
};

data({name: 'Freddy'});

module.exports = {data};