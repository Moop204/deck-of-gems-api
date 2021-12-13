import express from "express";
import dotenv from "dotenv";
import { GemDeck } from "./GemDeck";
import { Tier } from "./Card";
import { decodeId } from "./generateId";
import * as swaggerDocument from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

export function initEndpoints() {
  // dotenv.config();
  const app = express();
  app.use(cors());

  // Uses Heroku defined port number or else 3000
  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`server started ${port}`));

  app.get("/start", cors(), (req: any, res: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const board = new GemDeck();
    res.status(200).json({ state: board.generateId() });
  });

  app.get("/draw", cors(), (req: any, res: any) => {
    // console.log("draw: " + req.query.state);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.query.state && req.query.tier) {
      // console.log(decodeId(req.query.state));
      const board = new GemDeck(decodeId(req.query.state));
      const cardType = board.drawGem(parseInt(req.query.tier));
      if (cardType) {
        const card = cardType.toJSON();
        console.log("200: " + board.generateId());
        console.log(card);
        res.status(200).json({ state: board.generateId(), card });
      } else {
        console.log("409: " + req.query.tier);
        res.status(409).json({
          error: "Cannot draw from this tier because no cards are left.",
        });
      }
    } else {
      console.log("400: BAD");
      res
        .status(400)
        .json({ errormessage: "Lacking state or tier parameter." });
    }
  });

  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
