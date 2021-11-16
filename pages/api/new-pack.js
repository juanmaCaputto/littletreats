import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://capumotto:macanudo@cluster0.gnfcw.mongodb.net/packs?retryWrites=true&w=majority'
    );
    const db = client.db();

    const packsCollection = db.collection('packs');

    const result = await packsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Pack ingresado!' });
  }
}

export default handler;
