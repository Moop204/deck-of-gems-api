"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.GemNum = exports.Gem = void 0;
var Gem;
(function (Gem) {
    Gem["BLACK"] = "black";
    Gem["WHITE"] = "white";
    Gem["RED"] = "red";
    Gem["GREEN"] = "green";
    Gem["BLUE"] = "blue";
})(Gem = exports.Gem || (exports.Gem = {}));
var GemNum;
(function (GemNum) {
    GemNum[GemNum["black"] = 0] = "black";
    GemNum[GemNum["white"] = 1] = "white";
    GemNum[GemNum["red"] = 2] = "red";
    GemNum[GemNum["green"] = 3] = "green";
    GemNum[GemNum["blue"] = 4] = "blue";
})(GemNum = exports.GemNum || (exports.GemNum = {}));
class Card {
    constructor({ reward, point, tier, blackCost, whiteCost, redCost, greenCost, blueCost, }) {
        this.reward = reward;
        this.point = point;
        this.tier = tier;
        this.blackCost = blackCost;
        this.whiteCost = whiteCost;
        this.redCost = redCost;
        this.greenCost = greenCost;
        this.blueCost = blueCost;
    }
    toJSON() {
        const result = {
            reward: this.reward,
            point: this.point,
            tier: this.tier,
            cost: {
                black: this.blackCost,
                white: this.whiteCost,
                red: this.redCost,
                blue: this.blueCost,
                green: this.greenCost,
            },
        };
        return result;
    }
    valuesAsSequence() {
        return [
            GemNum[this.reward],
            this.point,
            this.tier,
            this.blackCost,
            this.whiteCost,
            this.redCost,
            this.blueCost,
            this.greenCost,
        ];
    }
    getTier() {
        return this.tier;
    }
}
exports.Card = Card;
//# sourceMappingURL=Card.js.map