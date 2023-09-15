const mongoose = require("mongoose");
const config = require("./src/config");
module.exports = {
  connect: () => {
    try {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      let uri = config.database_url
      mongoose.set("strictQuery", false);
      mongoose.connect(uri, options).catch((err) => {
        console.log("mongoose error", err);
      });
      return mongoose;
    } catch (error) {
      console.log("mongodb error", error);
    }
  },
};