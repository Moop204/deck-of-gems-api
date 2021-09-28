import { referenceDeck } from "./allCards";
import { Card } from "./Card";
import { encodeId } from "./generateId";
import { TierDeck } from "./TierDeck/TierDeck";

export class GemDeck {
  tier1Deck: TierDeck;
  tier2Deck: TierDeck;
  tier3Deck: TierDeck;

  constructor(
    deckState: number[] = Array.from(Array(referenceDeck.length).keys())
  ) {
    const initialiser1: number[] = [];
    const initialiser2: number[] = [];
    const initialiser3: number[] = [];

    referenceDeck.forEach((card: Card, index) => {
      if (deckState.includes(index)) {
        switch (card.getTier()) {
          case 1:
            initialiser1.push(index);
            break;
          case 2:
            initialiser2.push(index);
            break;
          case 3:
            initialiser3.push(index);
            break;
          default:
            console.log("Error: invalid tier.");
        }
      }
    });

    this.tier1Deck = new TierDeck(initialiser1);
    this.tier2Deck = new TierDeck(initialiser2);
    this.tier3Deck = new TierDeck(initialiser3);
  }

  generateId(): string {
    const deckState: number[] = [
      ...this.tier1Deck.getCards(),
      ...this.tier2Deck.getCards(),
      ...this.tier3Deck.getCards(),
    ];
    deckState.sort((a: number, b: number) => {
      return a - b;
    });

    const filledState = fillArray(deckState, 0, 90);
    return encodeId(filledState);
  }

  drawGem(tier: number): Card {
    let deck: TierDeck;
    switch (tier) {
      case 1:
        deck = this.tier1Deck;
        break;
      case 2:
        deck = this.tier2Deck;
        break;
      case 3:
        deck = this.tier3Deck;
        break;
      default:
        console.log("Error: Undefined tier drawn from");
    }
    return deck.draw();
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
