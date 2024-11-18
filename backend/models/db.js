const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("mongodb connectedw");
  })
  .catch((err) => {
    console.log("mongoose connection error", err);
  });
