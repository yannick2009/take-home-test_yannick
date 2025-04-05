import { drugTypes } from "./constants";
import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should update dafalgan benefit and expiresIn values", () => {
    const pharmarcy = new Pharmacy();
    pharmarcy.addDrug(new Drug(drugTypes.DAFALGAN, 5, 5));
    expect(pharmarcy.updateBenefitValue()).toEqual([
      new Drug(drugTypes.DAFALGAN, 4, 3),
    ]);
  });

  it("should return empty drugs list", () => {
    const pharmarcy = new Pharmacy();
    pharmarcy.addDrug("test");
    pharmarcy.addDrug(2);
    pharmarcy.addDrug(null);
    pharmarcy.addDrug({});
    pharmarcy.addDrug(undefined);

    expect(pharmarcy.drugs).toEqual([]);
    expect(pharmarcy.drugs.length).toEqual(0);
  });
});
