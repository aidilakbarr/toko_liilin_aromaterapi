import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import { db } from "./models/index.js";

const app = express();

// Test koneksi ke database
async function connectDatabase() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    // Sinkronisasi model ke database (jangan gunakan di production)
    await db.sync({ alter: true });
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
