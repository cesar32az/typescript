import { connect } from "mongoose";

(async () => {
  try {
    await connect("mongodb://localhost/tsc-jwt-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
})();
