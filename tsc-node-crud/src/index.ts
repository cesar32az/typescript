import App from "./app";
import database from "./database";

//starting server
database();
const app = new App();
app.start();
