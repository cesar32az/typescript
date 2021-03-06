import express from "express";
import morgan from "morgan";
import path from "path";

//import routes
import indexRoutes from "./routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/photos", indexRoutes);

//storage public files
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
