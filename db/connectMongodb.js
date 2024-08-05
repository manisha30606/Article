const mongoose = require('mongoose');

const connectMongodb = async () => {
    try {
        const uri = process.env.MONGO_DB_URI;
        if (!uri) {
            throw new Error('MONGO_DB_URI environment variable not set');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectMongodb;
