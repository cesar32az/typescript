import { connect, ConnectionOptions } from "mongoose";
import config from "./config/config";

const dbOptions: ConnectionOptions = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
(
  async (): Promise<void> => {
    try {
      await connect(config.DB.URI, dbOptions);
      console.log("Db is connected");
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
  }
)();
