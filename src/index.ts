import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import corsOptions from "./middlewares/cors";
import http from "http";
import https from "https";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const HOST_IP = process.env.HOST_IP || "127.0.0.1";
const PORT = process.env.HTTP_PORT || "3000";
const corsMiddleware = cors(corsOptions);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsMiddleware);

app.get("/", (req, res) => {
  res.json({ project: "TEST-AWS-API", author: "Yeison Rojas" });
});

app.listen(PORT, () => {
  console.log(`Listening in http://${HOST_IP}:${PORT}`);
});

const httpServer = http.createServer(app);
httpServer.listen(80);
