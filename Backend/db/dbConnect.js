const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to Mongo Db"))
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
