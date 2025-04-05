import { Drug } from "./pharmacy";

describe("drug", () => {
  it("should have 0 as min for benefit", () => {
    expect(new Drug("test", 2, -100).benefit).toEqual(0);
  });

  it("should have 50 as max for benefit", () => {
    expect(new Drug("test", 2, 100).benefit).toEqual(50);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    drug.update();
    expect(drug.expiresIn).toEqual(1);
    expect(drug.benefit).toEqual(2);
  });
});
