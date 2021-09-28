import { Card, Tier } from "../src/Card";
import { GemDeck } from "../src/GemDeck";
import { decodeId } from "../src/generateId";

jest.mock("../src/Card");

it("should mock class Card", () => {
  const functionNameMock = jest.fn(() => {
    return 2 as Tier;
  });
  jest.spyOn(Card.prototype, "getTier").mockImplementation(functionNameMock);
});

describe("testing encoding functions", () => {
  // it("encodes an empty deck", () => {
  //   const parameter: number[] = [];
  //   const deck = new GemDeck(parameter);
  //   const hash = deck.generateId();
  //   const decoded = decodeId(hash);
  //   expect(decoded).toEqual(parameter);
  // });
  // it("encodes full deck", () => {
  //   const parameter: number[] = Array.from(Array(90).keys());
  //   const deck = new GemDeck(parameter);
  //   const hash = deck.generateId();
  //   const decoded = decodeId(hash);
  //   expect(decoded).toEqual(parameter);
  // });
  // it("encodes subsection of deck", () => {
  //   const parameter: number[] = Array.from(Array(90).keys()).slice(7, 23);
  //   const deck = new GemDeck(parameter);
  //   const hash = deck.generateId();
  //   const decoded = decodeId(hash);
  //   expect(decoded).toEqual(parameter);
  // });
  // it("encodes arbitrary unordered selection of cards", () => {
  //   const parameter: number[] = [7, 23, 11, 26, 1];
  //   const deck = new GemDeck(parameter);
  //   const hash = deck.generateId();
  //   const decoded = decodeId(hash);
  //   expect(decoded.sort()).toEqual(parameter.sort());
  // });
});
