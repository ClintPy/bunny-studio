const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const connect = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      process.env.NODE_ENV === "test" ? process.env.DB_TEST_URL : process.env.DB_URL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }, () => console.log("Connected to DB!")
    );
  }
};

const truncate = async () => {
    if (mongoose.connection.readyState !== 0){
        const { collections } = mongoose.connection

        const promises = Object.keys(collections).map(collections => {
            mongoose.connection.collection(collections).deleteMany({})
        })

        await Promise.all(promises)
    }
}

const disconnect = async () => {
    if(mongoose.connection.readyState !== 0){
        await mongoose.disconnect();
    }
}

module.exports = {
    connect,
    truncate,
    disconnect,
}
