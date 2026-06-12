import express from "express";
import signRouter from "./routes/signRoutes.ts";
import visionRouter from "./routes/visionRoutes.ts"
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
console.log(process.env.DATABASE_URL);

app.use(cors({
    origin: "http://localhost:5173"
}));

const PORT = 3000;
app.use(express.json());

app.use("/", signRouter);
app.use("/vision", visionRouter);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () =>{
    console.log("App running in 3000");
});
