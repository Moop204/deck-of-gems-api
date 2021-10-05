"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemDeck = void 0;
const allCards_1 = require("./allCards");
const generateId_1 = require("./generateId");
const TierDeck_1 = require("./TierDeck/TierDeck");
class GemDeck {
    constructor(deckState = Array.from(Array(allCards_1.referenceDeck.length).keys())) {
        const initialiser1 = [];
        const initialiser2 = [];
        const initialiser3 = [];
        allCards_1.referenceDeck.forEach((card, index) => {
            if (deckState.includes(index)) {
                switch (card.getTier()) {
                    case 1:
                        initialiser1.push(index);
                        break;
                    case 2:
                        initialiser2.push(index);
                        break;
                    case 3:
                        initialiser3.push(index);
                        break;
                    default:
                        console.log("Error: invalid tier.");
                }
            }
        });
        this.tier1Deck = new TierDeck_1.TierDeck(initialiser1);
        this.tier2Deck = new TierDeck_1.TierDeck(initialiser2);
        this.tier3Deck = new TierDeck_1.TierDeck(initialiser3);
    }
    generateId() {
        const deckState = [
            ...this.tier1Deck.getCards(),
            ...this.tier2Deck.getCards(),
            ...this.tier3Deck.getCards(),
        ];
        deckState.sort((a, b) => {
            return a - b;
        });
        const filledState = fillArray(deckState, 0, 90);
        return (0, generateId_1.encodeId)(filledState);
    }
    drawGem(tier) {
        let deck;
        switch (tier) {
            case 1:
                deck = this.tier1Deck;
                break;
            case 2:
                deck = this.tier2Deck;
                break;
            case 3:
                deck = this.tier3Deck;
                break;
            default:
                console.log("Error: Undefined tier drawn from");
        }
        return deck.draw();
    }
}
exports.GemDeck = GemDeck;
const fillArray = (arr, min, max) => {
    const res = [];
    let current = min;
    arr.forEach((val) => {
        while (val > current) {
            res.push(-1);
            current++;
        }
        res.push(val);
        current++;
    });
    while (current < max) {
        res.push(-1);
        current++;
    }
    return res;
};
//# sourceMappingURL=GemDeck.js.map