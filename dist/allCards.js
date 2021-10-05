"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceDeck = exports.fullDeck = void 0;
const Card_1 = require("./Card");
const initialiseBlack = () => {
    const rawNum = [];
    //
    rawNum.push([0, 1, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 0, 2], [0, 1, 0, 2, 0, 0, 2], [0, 1, 1, 0, 3, 0, 1], [0, 1, 0, 0, 0, 0, 3], [0, 1, 0, 1, 1, 2, 1], [0, 1, 0, 2, 1, 2, 0], [1, 1, 0, 0, 0, 4, 0], [1, 2, 0, 3, 0, 2, 2], [1, 2, 2, 3, 0, 0, 3], [2, 2, 0, 0, 2, 1, 4], [2, 2, 0, 5, 0, 0, 0], [2, 2, 0, 0, 3, 0, 5], [3, 2, 6, 0, 0, 0, 0], [3, 3, 0, 3, 3, 3, 5], [4, 3, 0, 0, 7, 0, 0], [4, 3, 3, 0, 6, 0, 3], [5, 3, 3, 0, 7, 0, 0]);
    return rawNum;
};
const initialiseBlue = () => {
    const rawNum = [];
    //
    rawNum.push([0, 1, 2, 1, 0, 0, 0], [0, 1, 1, 1, 2, 0, 1], [0, 1, 1, 1, 1, 0, 1], [0, 1, 0, 0, 1, 1, 3], [0, 1, 3, 0, 0, 0, 0], [0, 1, 0, 1, 2, 0, 2], [0, 1, 2, 0, 0, 0, 2], [1, 1, 0, 0, 4, 0, 0], [1, 2, 0, 0, 3, 2, 2], [1, 2, 3, 0, 0, 2, 3], [2, 2, 0, 5, 0, 3, 0], [2, 2, 0, 0, 0, 5, 0], [2, 2, 4, 2, 1, 0, 0], [3, 2, 0, 0, 0, 6, 0], [3, 3, 5, 3, 3, 0, 3], [4, 3, 0, 7, 0, 0, 0], [4, 3, 3, 6, 0, 3, 0], [5, 3, 0, 7, 0, 3, 0]);
    return rawNum;
};
const initialiseGreen = () => {
    const rawNum = [];
    //
    rawNum.push([0, 1, 0, 2, 0, 1, 0], [0, 1, 0, 0, 2, 2, 0], [0, 1, 0, 1, 0, 3, 1], [0, 1, 1, 1, 1, 1, 0], [0, 1, 2, 1, 1, 1, 0], [0, 1, 2, 0, 2, 1, 0], [0, 1, 0, 0, 3, 0, 0], [1, 1, 4, 0, 0, 0, 0], [1, 2, 0, 3, 3, 0, 2], [1, 2, 2, 2, 0, 3, 0], [2, 2, 1, 4, 0, 2, 0], [2, 2, 0, 0, 0, 0, 5], [2, 2, 0, 0, 0, 5, 3], [3, 2, 0, 0, 0, 0, 6], [3, 3, 3, 5, 3, 3, 0], [4, 3, 0, 3, 0, 6, 3], [4, 3, 0, 0, 0, 7, 0], [5, 3, 0, 0, 0, 7, 3]);
    return rawNum;
};
const initialiseRed = () => {
    const rawNum = [];
    //
    rawNum.push([0, 1, 0, 3, 0, 0, 0], [0, 1, 3, 1, 1, 0, 0], [0, 1, 0, 0, 0, 2, 1], [0, 1, 2, 2, 0, 0, 1], [0, 1, 1, 2, 0, 1, 1], [0, 1, 1, 1, 0, 1, 1], [0, 1, 0, 2, 2, 0, 0], [1, 1, 0, 4, 0, 0, 0], [1, 2, 3, 0, 2, 3, 0], [1, 2, 3, 2, 2, 0, 0], [2, 2, 0, 1, 0, 4, 2], [2, 2, 5, 3, 0, 0, 0], [2, 2, 5, 0, 0, 0, 0], [3, 2, 0, 0, 6, 0, 0], [3, 3, 3, 3, 0, 5, 3], [4, 3, 0, 0, 0, 0, 7], [4, 3, 0, 0, 3, 3, 6], [5, 3, 0, 0, 3, 0, 7]);
    return rawNum;
};
const initialiseWhite = () => {
    const rawNum = [
        [0, 1, 1, 0, 0, 2, 2],
        [0, 1, 1, 0, 2, 0, 0],
        [0, 1, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 0, 3, 0],
        [0, 1, 0, 0, 0, 2, 2],
        [0, 1, 1, 0, 1, 1, 2],
        [0, 1, 1, 3, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 4],
        [1, 2, 2, 0, 2, 0, 3],
        [1, 2, 0, 2, 3, 3, 0],
        [2, 2, 2, 0, 4, 0, 1],
        [2, 2, 0, 0, 5, 0, 0],
        [2, 2, 3, 0, 5, 0, 0],
        [3, 2, 0, 6, 0, 0, 0],
        [3, 3, 3, 0, 5, 3, 3],
        [4, 3, 7, 0, 0, 0, 0],
        [4, 3, 6, 3, 3, 0, 0],
        [5, 3, 7, 3, 0, 0, 0],
    ];
    return rawNum;
};
const cardWrapper = (g, values) => {
    return values.map(([point, tier, blackCost, whiteCost, redCost, blueCost, greenCost]) => {
        const initialiser = {
            reward: g,
            tier: tier,
            point,
            blackCost,
            whiteCost,
            redCost,
            blueCost,
            greenCost,
        };
        return new Card_1.Card(initialiser);
    });
};
const fullDeck = () => {
    return [
        ...cardWrapper(Card_1.Gem.BLACK, initialiseBlack()),
        ...cardWrapper(Card_1.Gem.BLUE, initialiseBlue()),
        ...cardWrapper(Card_1.Gem.WHITE, initialiseWhite()),
        ...cardWrapper(Card_1.Gem.GREEN, initialiseGreen()),
        ...cardWrapper(Card_1.Gem.RED, initialiseRed()),
    ];
};
exports.fullDeck = fullDeck;
const referenceDeck = fullDeck();
exports.referenceDeck = referenceDeck;
//# sourceMappingURL=allCards.js.map