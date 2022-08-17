const MongoCli= require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://mdgarcia:mdgarcia@adsi2364481.zxwnmw4.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const Aprendices = database.collection("Aprendices");

    // query for movies that have a runtime less than 15 minutes
    const query = { };

    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { title: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, cedula: 1, nombre: 1 },
    };

    const cursor = Aprendices.find(query, options);

    // print a message if no documents were found
    if ((await Aprendices.countDocuments()) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
