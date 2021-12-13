import { BonusInitialiser, Bonus } from "./Bonus";

const generateBonus = (arr: number[]) => {
  const init: BonusInitialiser = {
    reward: arr[0],
    blackCost: arr[1],
    whiteCost: arr[2],
    redCost: arr[3],
    greenCost: arr[4],
    blueCost: arr[5],
  };
  return new Bonus(init);
};

const generateAllBonus = () => {
  return [
    [3, 0, 3, 0, 3, 3], // Reward, black, white, red, green, blue
    [3, 0, 0, 3, 3, 3],
    [3, 3, 3, 3, 0, 0],
    [3, 3, 3, 0, 0, 3],
    [3, 3, 0, 3, 3, 0],
    [3, 4, 0, 4, 0, 0],
    [3, 4, 4, 0, 0, 0],
    [3, 0, 4, 0, 0, 4],
    [3, 0, 0, 0, 4, 4],
    [3, 0, 0, 4, 4, 0],
  ].map((b) => generateBonus(b));
};

export class BonusDeck {
  bonuses: Bonus[];

  constructor() {
    this.bonuses = generateAllBonus();
  }

  drawBonus = () => {
    const drawIndexes: Set<number> = new Set();
    while (drawIndexes.size < 4) {
      const index: number = Math.round(Math.random() * this.bonuses.length - 1);
      drawIndexes.add(index);
    }
    const bonusList: Bonus[] = [];
    drawIndexes.forEach((i: number) => {
      bonusList.push(this.bonuses[i]);
    });
    return bonusList;
  };
}

// export const allBonus = generateAllBonus();
