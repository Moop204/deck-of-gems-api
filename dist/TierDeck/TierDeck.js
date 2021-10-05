"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TierDeck = void 0;
const allCards_1 = require("../allCards");
class TierDeck {
    constructor(deckState) {
        this.cards = [...deckState];
    }
    draw() {
        const index = Math.round(Math.random() * this.cards.length - 1);
        const referenceSelector = this.cards.splice(index, 1)[0];
        const selected = allCards_1.referenceDeck[referenceSelector];
        return selected;
    }
    getCards() {
        return this.cards;
    }
    remainingCards() {
        return this.cards.length;
    }
}
exports.TierDeck = TierDeck;
//# sourceMappingURL=TierDeck.js.map