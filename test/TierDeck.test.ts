import { referenceDeck } from "../src/allCards";
import { Card, Tier } from "../src/Card";
import { TierDeck } from "../src/TierDeck/TierDeck";

jest.mock("../src/Card");

it("should mock class Card", () => {
  const functionNameMock = jest.fn(() => {
    return 2 as Tier;
  });
  jest.spyOn(Card.prototype, "getTier").mockImplementation(functionNameMock);
});

describe("testing TierDeck object", () => {
  it("constructs an empty deck", () => {
    const td = new TierDeck([]);
    expect(td).toBeDefined();
    expect(td.remainingCards()).toEqual(0);
  });
  it("constructs a deck with valid elements", () => {
    const td = new TierDeck([2, 11, 34, 24]);
    expect(td).toBeDefined();
    expect(td.remainingCards()).toEqual(4);
  });
  it("counts remaining cards", () => {
    const td = new TierDeck([1, 2, 3]);
    expect(td.remainingCards()).toEqual(3);
  });
  it("draws cards", () => {
    const cardIndexes = [2, 11, 34, 24];
    const td = new TierDeck(cardIndexes);
    const drawnCards = [];
    while (td.remainingCards() > 0) {
      console.log(td.remainingCards());
      drawnCards.push(td.draw().toJSON());
      console.log(td.remainingCards());
    }
    const expectedCards = cardIndexes.map((idx) => {
      return referenceDeck[idx].toJSON();
    });
    expect(drawnCards.length).toEqual(expectedCards.length);
    expect(drawnCards.sort()).toEqual(expectedCards.sort());
  });
});
