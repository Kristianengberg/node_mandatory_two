/*import MongoClient from "mongodb"
const mongoClient = MongoClient.MongoClient;
import assert from "assert";

const url = 'mongodb://localhost:27017';

const dbName = 'portfolioDatabase';
const client = new mongoClient(url);

function testConnection() {
    client.connect(function(err) {
        assert.strictEqual(null, err);
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        client.close();

    });
}

function dataRetriever() {
    client.connect(function(err) {
        assert.strictEqual(null, err);
        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const projects = db.collection("projects");

        projects.find().toArray((error, data) => {
            if (error) {
                throw new Error(error);

            }
            console.log(JSON.stringify(data));
        })


    });

    client.close();
}


dataRetriever();

export { client };
*/
