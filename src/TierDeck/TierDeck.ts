import { referenceDeck } from "../allCards";
import { Card } from "../Card";

export class TierDeck {
  private cards: number[];

  constructor(deckState: number[]) {
    this.cards = [...deckState];
  }

  draw(): Card {
    const index: number = Math.round(Math.random() * this.cards.length - 1);
    const referenceSelector = this.cards.splice(index, 1)[0];
    const selected: Card = referenceDeck[referenceSelector];

    return selected;
  }

  getCards(): number[] {
    return this.cards;
  }

  remainingCards(): number {
    return this.cards.length;
  }
}
