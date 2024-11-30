const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => console.log("Database connection error:", err));
}

module.exports = connectToDb;
