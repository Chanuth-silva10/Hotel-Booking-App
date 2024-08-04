import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors()
);

app.get("/api/test", (req: Request, res: Response) => {
    res.json({message: "Test api"});
  });

app.listen(4000, () => {
  console.log("server running on localhost:7000");
});
