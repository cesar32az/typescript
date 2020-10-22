import express, { Application } from "express";
import morgan from "morgan";

//import routes
import authRoutes from "./routes/auth";

//app
const app: Application = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/auth", authRoutes);

export default app;
