"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allCards_1 = require("../allCards");
const draw = (cards) => {
    const index = Math.round(Math.random() * cards.length - 1);
    const referenceSelector = cards[index];
    const selected = allCards_1.referenceDeck[referenceSelector];
    cards.splice(index);
    return selected;
};
//# sourceMappingURL=utility.js.map