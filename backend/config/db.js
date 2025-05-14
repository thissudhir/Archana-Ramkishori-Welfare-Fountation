const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected to: ${connect.connection.name} database`)
    }
    catch (err) {
        console.log(err);
        process.exit(1);

    }
}

module.exports = dbConnect;