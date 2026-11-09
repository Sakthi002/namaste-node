// Go to MongoDB website
// Create Org
// Create Project
// Create Cluster
// Create User
// Get the connection URl
// Install MongoDB compass

const { MongoClient } = require('mongodb');
const url ="mongodb+srv://sakthiviji019_db_user:5eHN8Q11OY6SRBqE@namastenode.nmcg0eq.mongodb.net";

const client = new MongoClient(url);

const dbName = "db_one";

async function main() {

    await client.connect();

    console.log("Client connected successfully");

    const db = client.db(dbName);

    const collection = db.collection('users');

    const data = {
        first_name: 'Jhon',
        lastname: "Doe",
        city: 'New York',
        country: 'USA'
    };

    const insertResult = await collection.insertMany([data]);

    const results = await collection.find({}).toArray();

    const filteredDocs = await collection.find({ first_name: 'Jhon' }).toArray();

    const updateResult = await collection.updateOne({ first_name: "Sakthivel" }, { $set: { city: "Pennagaram" } });

    const deleteResult = await collection.deleteMany({ first_name: "Jhon" });

    return "done";
    
}

main().then(console.log).catch(console.error).finally(() => client.close());

