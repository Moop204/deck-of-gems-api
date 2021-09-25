import Hashids from "hashids";
import { referenceDeck } from "./allCards";

const hashids = new Hashids();

import { Card } from "./Card";

function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

const encodeId = (deck: number[]) => {
  let bitSummary = BigInt(1);
  deck.forEach((val, index) => {
    bitSummary = bitSummary << BigInt(1);
    if (val === index) bitSummary |= BigInt(1);
  });
  console.log(bitSummary);
  const hash = hashids.encode(bitSummary);
  return hash;
};

const decodeId = (hash: string) => {
  const decode = hashids.decode(hash);
  console.log("Decoded");
  console.log(decode);
  let bitSummary = BigInt(decode[0]);
  const referenceOne = BigInt(1);
  const res = [];
  for (let i = 0; i < referenceDeck.length; i++) {
    if ((bitSummary & referenceOne) === referenceOne) {
      res.push(referenceDeck.length - i - 1);
    }
    bitSummary = bitSummary >> referenceOne;
  }

  // deck.forEach((val, index) => {
  //   bitSummary = bitSummary << BigInt(1);
  //   if (val === index) bitSummary |= BigInt(1);
  // });
  return res.reverse();
};

export { encodeId, decodeId };
