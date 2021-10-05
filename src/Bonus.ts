interface Requirement {
  red: number;
  black: number;
  white: number;
  blue: number;
  green: number;
}

interface BonusInitialiser {
  reward: number;
  blackCost: number;
  whiteCost: number;
  redCost: number;
  greenCost: number;
  blueCost: number;
}

export class Bonus {
  requirement: Requirement;
  reward: number;

  constructor({
    reward,
    blackCost,
    whiteCost,
    redCost,
    greenCost,
    blueCost,
  }: BonusInitialiser) {
    this.reward = reward;
    this.requirement = {
      red: redCost,
      black: blackCost,
      white: whiteCost,
      blue: blueCost,
      green: greenCost,
    };
  }
}

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

export const allBonus = generateAllBonus();
