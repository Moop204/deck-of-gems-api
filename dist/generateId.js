"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeId = exports.encodeId = void 0;
const hashids_1 = __importDefault(require("hashids"));
const allCards_1 = require("./allCards");
const hashids = new hashids_1.default();
const encodeId = (deck) => {
    let bitSummary = BigInt(1);
    deck.forEach((val, index) => {
        bitSummary = bitSummary << BigInt(1);
        if (val === index)
            bitSummary |= BigInt(1);
    });
    const hash = hashids.encode(bitSummary);
    return hash;
};
exports.encodeId = encodeId;
const decodeId = (hash) => {
    const decode = hashids.decode(hash);
    let bitSummary = BigInt(decode[0]);
    const referenceOne = BigInt(1);
    const res = [];
    for (let i = 0; i < allCards_1.referenceDeck.length; i++) {
        if ((bitSummary & referenceOne) === referenceOne) {
            res.push(allCards_1.referenceDeck.length - i - 1);
        }
        bitSummary >>= referenceOne;
    }
    return res.reverse();
};
exports.decodeId = decodeId;
//# sourceMappingURL=generateId.js.map