import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import corsOptions from "./middlewares/cors";

const app = express();
const port = "3000";
const corsMiddleware = cors(corsOptions);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsMiddleware);

app.get("/", (req, res) => {
  res.json({ project: "TEST-AWS-API", author: "Yeison Rojas" });
});

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
