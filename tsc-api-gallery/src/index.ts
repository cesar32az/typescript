import app from "./app";
import "./database";

const main = async () => {
  await app.listen(app.get("port"));
  console.log("server on port", app.get("port"));
};

main();
