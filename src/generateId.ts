import Hashids from "hashids";

const hashids = new Hashids();

import { Card } from "./card";

function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

const generateId = (deck: number[]) => {
  let bitSummary = BigInt(1);
  deck.forEach(() => {
    bitSummary = bitSummary << BigInt(1);
    bitSummary |= BigInt(1);
  });
  const hash = hashids.encode(bitSummary);
  return hash;
};

export { generateId };
