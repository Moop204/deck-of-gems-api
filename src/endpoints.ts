import express from "express";
import dotenv from "dotenv";
import { GemDeck } from "./GemDeck";
import { Tier } from "./Card";
import { decodeId } from "./generateId";

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

export function initEndpoints() {
  // dotenv.config();
  const app = express();

  // Uses Heroku defined port number or else 3000
  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`server started ${port}`));

  app.get("/start", (req: any, res: any) => {
    const board = new GemDeck();
    res.status(200).json({ state: board.generateId() });
  });

  app.get("/draw", (req: any, res: any) => {
    console.log(decodeId(req.query.state));
    const board = new GemDeck(decodeId(req.query.state));
    const card = board.drawGem(parseInt(req.query.tier)).toJSON();
    res.status(200).json({ state: board.generateId(), card });
  });

  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
