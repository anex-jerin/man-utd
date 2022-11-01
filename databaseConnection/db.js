const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DataBase Connected`);
    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

module.exports = connectDB