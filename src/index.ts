import express from "express";
import dotenv from "dotenv";
import { Card, CardInitialiser, Gem } from "./Card";
import { fullDeck } from "./allCards";
import { Deck } from "./Deck";
import { decodeId } from "./generateId";

// dotenv.config();
// const app = express();

// Uses Heroku defined port number or else 3000
// const port = process.env.PORT || 3000;

// app.get("/", (req: any, res: any) => {
//   res.status(200).json({ base: "other" });
// });

// app.listen(port, () => console.log("server started"));

// const params: CardInitialiser = {
//   reward: Gem.BLUE,
//   point: 2,
//   tier: 2,
//   blackCost: 3,
//   whiteCost: 1,
//   blueCost: 5,
//   redCost: 2,
//   greenCost: 3,
// };

// const c = new Card(params);

// console.log(c.toJSON());

// const allCards = fullDeck();

const d1 = new Deck([3, 6, 7]);
const hash1 = d1.generateId();
console.log(hash1);
console.log(decodeId(hash1));
const d2 = new Deck(decodeId(hash1));
const hash2 = d1.generateId();
console.log(hash2);
