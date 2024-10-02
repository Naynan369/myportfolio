// pages/api/contact.js

import {MongoClient} from 'mongodb'

const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phoneNumber, email, subject, message } = req.body;

        
        // Validate the input (optional)
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill all required fields.' });
        }

        try {
            await client.connect();
            const database = client.db('contact'); // Replace with your database name
            const collection = database.collection('contacts');

            // Create a document to insert
            const doc = {
                name,
                phoneNumber,
                email,
                subject,
                message,
                createdAt: new Date(),
            };

            const result = await collection.insertOne(doc);
            res.status(200).json({ message: 'Message sent successfully!', result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send message.' });
        } finally {
            await client.close();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
