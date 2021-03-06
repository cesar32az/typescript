import { connect } from "mongoose";
import { mongodb } from "./keys";

(async () => {
  try {
    await connect(mongodb.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
})();
