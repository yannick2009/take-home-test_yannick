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
  update() {
    switch (this.name) {
      case drugTypes.MAGIC_PILL:
        break;
      case drugTypes.DAFALGAN:
        this.benefit = Math.max(0, this.benefit - 2);
        this.expiresIn -= 1;
        break;
      case drugTypes.HERBAL_TEA:
        this.benefit =
          this.expiresIn <= 0
            ? Math.min(50, this.benefit + 2)
            : (this.benefit += 1);
        this.expiresIn -= 1;
        break;
      case drugTypes.FERVEX:
        if (this.expiresIn <= 0) {
          this.benefit = 0;
          this.expiresIn -= 1;
          break;
        }

        if (this.benefit < 50) {
          this.benefit =
            this.expiresIn <= 5
              ? Math.min(50, this.benefit + 3)
              : this.expiresIn <= 10
                ? Math.min(50, this.benefit + 2)
                : Math.min(50, this.benefit + 1);
        }
        this.expiresIn -= 1;
        break;
      default:
        this.benefit =
          this.expiresIn <= 0
            ? Math.max(0, this.benefit - 2)
            : this.benefit - 1;
        this.expiresIn -= 1;
        break;
    }
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
      drug.update();
    }
    return structuredClone(this.drugs);
  }
}
