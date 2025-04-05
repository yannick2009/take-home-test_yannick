import { Drug, Pharmacy } from "./pharmacy";

describe("drug", () => {
  it("should have 0 as min for benefit", () => {
    expect(new Drug("test", 2, -100).benefit).toEqual(0);
  });
  it("should have 50 as max for benefit", () => {
    expect(new Drug("test", 2, 100).benefit).toEqual(50);
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const pharmarcy = new Pharmacy();
    pharmarcy.addDrug(new Drug("test", 2, 3));
    expect(pharmarcy.updateBenefitValue()).toEqual([new Drug("test", 1, 2)]);
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
