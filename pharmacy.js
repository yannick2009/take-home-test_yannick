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
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != drugTypes.HERBAL_TEA &&
        this.drugs[i].name != drugTypes.FERVEX
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != drugTypes.MAGIC_PILL) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == drugTypes.FERVEX) {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != drugTypes.MAGIC_PILL) {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != drugTypes.HERBAL_TEA) {
          if (this.drugs[i].name != drugTypes.FERVEX) {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != drugTypes.MAGIC_PILL) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
