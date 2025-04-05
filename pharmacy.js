import { drugTypes } from "./constants";

// function to declare the initial benefit value and make sure that it doesn't exced 50
const initBenefit = (num) => (num > 50 ? 50 : num < 0 ? 0 : num);

// Class to instanciate Drug
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = initBenefit(benefit);
  }
}

// class to instanciate pharmacy
export class Pharmacy {
  constructor() {
    this.drugs = [];
  }
  addDrug(drug) {
    if (drug instanceof Drug) {
      this.drugs.push(drug);
    }
  }
  updateBenefitValue() {
    for (let drug of this.drugs) {
      switch (drug.name) {
        case drugTypes.MAGIC_PILL:
          break;
        case drugTypes.DAFALGAN:
          drug.benefit = Math.max(0, drug.benefit - 2);
          drug.expiresIn -= 1;
          break;
        case drugTypes.HERBAL_TEA:
          if (drug.expiresIn <= 0) {
            drug.benefit = Math.min(50, drug.benefit + 2);
          } else {
            drug.benefit += 1;
          }
          drug.expiresIn -= 1;
          break;
        case drugTypes.FERVEX:
          if (drug.expiresIn <= 0) {
            drug.benefit = 0;
            drug.expiresIn -= 1;
            break;
          }

          if (drug.benefit < 50) {
            if (drug.expiresIn <= 5) {
              drug.benefit = Math.min(50, drug.benefit + 3);
            } else if (drug.expiresIn <= 10) {
              drug.benefit = Math.min(50, drug.benefit + 2);
            } else {
              drug.benefit = Math.min(50, drug.benefit + 1);
            }
          }

          drug.expiresIn -= 1;
          break;
        default:
          if (drug.expiresIn <= 0) {
            drug.benefit = Math.max(0, drug.benefit - 2);
          } else {
            drug.benefit -= 1;
          }
          drug.expiresIn -= 1;
          break;
      }
    }

    return this.drugs;
  }
}
