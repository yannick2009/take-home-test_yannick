import { drugTypes } from "./constants";
import { Drug } from "./pharmacy";

describe("Drug class instanciation", () => {
  it("should have 0 as min for benefit", () => {
    expect(new Drug("test", 2, -100).benefit).toEqual(0);
  });

  it("should have 50 as max for benefit", () => {
    expect(new Drug("test", 2, 100).benefit).toEqual(50);
  });
});

describe("Fervex update", () => {
  it("fervex: should increase benefit by 3 when expireIn <= 5 and decrease expireIn", () => {
    const [initExpireIn, initBenefit] = [5, 3];
    const drug = new Drug(drugTypes.FERVEX, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit + 3);
  });

  it("fervex: should increase benefit by 2 when expireIn <= 10 and decrease expireIn", () => {
    const [initExpireIn, initBenefit] = [10, 3];
    const drug = new Drug(drugTypes.FERVEX, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit + 2);
  });

  it("fervex: should increase benefit by 1 when expireIn > 10 and decrease expireIn", () => {
    const [initExpireIn, initBenefit] = [11, 3];
    const drug = new Drug(drugTypes.FERVEX, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit + 1);
  });

  it("fervex: should increase benefit and decrease expireIn but benefit maximum is 50", () => {
    const [initExpireIn, initBenefit] = [11, 49];
    const drug = new Drug(drugTypes.FERVEX, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(50);
  });
});

describe("Magic Pill update", () => {
  it("Magic pill: benefit and expireIn should not change", () => {
    const [initExpireIn, initBenefit] = [5, 5];
    const drug = new Drug(drugTypes.MAGIC_PILL, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn);
    expect(drug.benefit).toEqual(initBenefit);
  });
});

describe("Unknown drugs update", () => {
  it("Unknown: should decrease the benefit by 1 and expiresIn by 1 when expireIn > 0", () => {
    const [initExpireIn, initBenefit] = [2, 3];
    const drug = new Drug("unknown", initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit - 1);
  });

  it("Unknown: should decrease the benefit by 2 and expiresIn by 1 when expireIn <= 0", () => {
    const [initExpireIn, initBenefit] = [0, 3];
    const drug = new Drug("unknown", initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit - 2);
  });

  it("Unknown: should decrease the benefit by 2 and expiresIn by 1 but benefit minimum stay 0", () => {
    const [initExpireIn, initBenefit] = [0, 1];
    const drug = new Drug("unknown", initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(0);
  });
});

describe("Dafalgan drug update", () => {
  it("Dafalgan: should decrease the benefit by 2 and expiresIn by 1", () => {
    const [initExpireIn, initBenefit] = [5, 5];
    const drug = new Drug(drugTypes.DAFALGAN, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit - 2);
  });

  it("Dafalgan: should decrease the benefit by 2 and expiresIn by 1 but benefit minimum stay 0", () => {
    const [initExpireIn, initBenefit] = [0, 1];
    const drug = new Drug(drugTypes.DAFALGAN, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(0);
  });
});

describe("Herbal Tea drug update", () => {
  it("Herbal Tea: should increase benefit by 1 and decrease expiresIn by 1 when expireIn > 0", () => {
    const [initExpireIn, initBenefit] = [3, 3];
    const drug = new Drug(drugTypes.HERBAL_TEA, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit + 1);
  });

  it("Herbal Tea: should increase benefit by 2 and decrease expiresIn by 1 when expireIn <= 0", () => {
    const [initExpireIn, initBenefit] = [0, 3];
    const drug = new Drug(drugTypes.HERBAL_TEA, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(initBenefit + 2);
  });

  it("Herbal Tea: should increase benefit and decrease expireIn but benefit maximum is 50", () => {
    const [initExpireIn, initBenefit] = [11, 49];
    const drug = new Drug(drugTypes.HERBAL_TEA, initExpireIn, initBenefit);
    drug.update();

    expect(drug.expiresIn).toEqual(initExpireIn - 1);
    expect(drug.benefit).toEqual(50);
  });
});
