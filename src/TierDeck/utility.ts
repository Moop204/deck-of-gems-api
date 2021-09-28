import { referenceDeck } from "../allCards";
import { Card } from "../Card";

const draw = (cards: number[]) => {
  const index: number = Math.round(Math.random() * cards.length - 1);
  const referenceSelector = cards[index];
  const selected: Card = referenceDeck[referenceSelector];
  cards.splice(index);
  return selected;
};
