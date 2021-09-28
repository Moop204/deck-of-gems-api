import { Card, Tier } from "../src/Card";

jest.mock("../src/Card");

it("should mock class Card", () => {
  const functionNameMock = jest.fn(() => {
    return 2 as Tier;
  });
  jest.spyOn(Card.prototype, "getTier").mockImplementation(functionNameMock);
});
