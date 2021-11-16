import express from "express";
import dotenv from "dotenv";
import { GemDeck } from "./GemDeck";
import { Tier } from "./Card";
import { decodeId } from "./generateId";
import * as swaggerDocument from "./swagger.json";
import swaggerUi from "swagger-ui-express";

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
    if (req.query.state && req.query.tier) {

res.set('Access-Control-Allow-Origin', 'https://deck-of-gems.herokuapp.com/');      console.log(decodeId(req.query.state));
      const board = new GemDeck(decodeId(req.query.state));
      const card = board.drawGem(parseInt(req.query.tier)).toJSON();
      res.status(200).json({ state: board.generateId(), card });
    } else {
      res
        .status(400)
        .json({ errormessage: "Lacking state or tier parameter." });
    }
  });

  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
