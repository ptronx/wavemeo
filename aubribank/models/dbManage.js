const {MongoClient} = require('mongodb');

const uri ="mongodb+srv://Freddy:FPmt5526@clusterbank.5fkz2.mongodb.net/Banedger_DB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function addUser(userDoc) {
    try {
      await client.connect();
      const database = client.db('Banedger_DB');
      const users = database.collection('users');
      console.log('\x1b[33m%s\x1b[0m: ','connected to Banedger_DB/users');

      // Query for...
      /*const query = { name: 'Freddy' };
      const userDoc = await users.findOne(query);
      */
      const newUser = await users.insertOne(userDoc);
      console.log(userDoc);

    } catch ( e ) {
        console.log('se produjo un error')
        console.error( e )

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log('\x1b[33m%s\x1b[0m ','close connection...');
    }
}


async function addNewBlock(blockDoc) {
    try {
      await client.connect();
      const database = client.db('Banedger_DB');
      const blockChain = database.collection('transactionsChain');
      console.log('\x1b[33m%s\x1b[0m: ','connected to Banedger_DB/users');

      // Query for...
      /*const query = { name: 'Freddy' };
      const userDoc = await users.findOne(query);
      */
      const newBlock = await users.insertOne(blockDoc);
      console.log(blockDoc);

    } catch ( e ) {
        console.log('se produjo un error')
        console.error( e )

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log('\x1b[33m%s\x1b[0m ','close connection...');
    }
}



//addUser().catch(console.dir);

module.exports = {addUser, addNewBlock}; 

