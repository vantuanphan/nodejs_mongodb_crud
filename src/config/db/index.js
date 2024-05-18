const mongoose = require('mongoose');

async function connect() {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mystore'
        await mongoose.connect(uri);
        console.log('Connected to MongoDB OK');
    } catch (err) {
        console.log('Connected to MongoDB FAIL');
    }
}

module.exports = {
    connect
};
