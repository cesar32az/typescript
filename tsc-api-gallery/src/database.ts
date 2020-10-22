import { connect } from "mongoose";

(async () => {
  try {
    await connect("mongodb://localhost/tsc-api-gallery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log("db is connected");
  } catch (error) {
    console.log(error)
  }
})();
