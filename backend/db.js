const mongoose = require('mongoose');
const User = require('./models/User');

const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Update this with your actual MongoDB URI

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log('MongoDB Connected');
            const fetched_data= await mongoose.connection.db.collection("shopping");
            fetched_data.find({}).toArray(function(err, data) {
                if (err)console.log(err);
                else console.log();
        });
        }
    });
}

module.exports = mongoDB;
