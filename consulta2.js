const MongoCli= require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://mdgarcia:mdgarcia@adsi2364481.zxwnmw4.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const Aprendices = database.collection("Aprendices");

    // Query for a movie that has the title 'The Room'
    const query = { cedula: 1001686431 };

    const options = {
      // sort matched documents in descending order by rating
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, cedula: 1, nombre: 1 },
    };

    const aprendices = await Aprendices.findOne(query, options);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(aprendices);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
