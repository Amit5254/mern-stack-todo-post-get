import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://amit:rkmt123987@ac-ktiokxv-shard-00-00.h1flikz.mongodb.net:27017,ac-ktiokxv-shard-00-01.h1flikz.mongodb.net:27017,ac-ktiokxv-shard-00-02.h1flikz.mongodb.net:27017/?ssl=true&replicaSet=atlas-q6slm3-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;