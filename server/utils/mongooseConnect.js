require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const { saveBooksOnLoad } = require('../routers/books-route');

async function ConnectMongoDb() {
  // return mongoose
  //   .connect(config.get('db'))
  //   .then(() => {
  //     console.log(`Connected to the db: on url ${config.get('db')}`);
  //   })
  //   .catch((e) => console.log(`Failed to connect to db: ${e?.message}`));

  try {
    console.log(config.get('db'));
    await mongoose.connect(config.get('db'));
    console.log(`Connected to db`);
    await saveBooksOnLoad();
  } catch (error) {
    console.log(`Failed to connect to the db : ${error?.message}`);
  }
}

module.exports = ConnectMongoDb;
