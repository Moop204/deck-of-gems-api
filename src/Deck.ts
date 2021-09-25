import { referenceDeck } from "./allCards";
import { Card } from "./Card";
import { encodeId } from "./generateId";

export class Deck {
  tier1Deck: number[];
  tier2Deck: number[];
  tier3Deck: number[];

  constructor(
    deckState: number[] = Array.from(Array(referenceDeck.length).keys())
  ) {
    this.tier1Deck = [];
    this.tier2Deck = [];
    this.tier3Deck = [];

    referenceDeck.forEach((card: Card, index) => {
      if (deckState.includes(index)) {
        switch (card.getTier()) {
          case 1:
            this.tier1Deck.push(index);
            break;
          case 2:
            this.tier2Deck.push(index);
            break;
          case 3:
            this.tier3Deck.push(index);
            break;
          default:
            console.log("Error: invalid tier.");
        }
      }
    });
  }

  generateId(): string {
    const deckState: number[] = [
      ...this.tier1Deck,
      ...this.tier2Deck,
      ...this.tier3Deck,
    ];
    deckState.sort((a: number, b: number) => {
      return a - b;
    });

    const filledState = fillArray(deckState, 0, 90);

    console.log(referenceDeck.length);
    console.log(filledState);
    return encodeId(filledState);
  }
}

const fillArray = (arr: number[], min: number, max: number) => {
  const res: number[] = [];
  let current = min;
  arr.forEach((val) => {
    while (val > current) {
      res.push(-1);
      current++;
    }
    res.push(val);
    current++;
  });
  while (current < max) {
    res.push(-1);
    current++;
  }
  return res;
};
