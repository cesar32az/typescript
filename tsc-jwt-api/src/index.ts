import app from "./app";
import dotenv from 'dotenv'
import './database'

dotenv.config()

const main = () => {
  app.listen(app.get("port"));
  console.log("server on port", app.get("port"));
};

main();
