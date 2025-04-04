import drugTypes from "./constants";
import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug(drugTypes.DOLIPRANE, 20, 30),
  new Drug(drugTypes.HERBAL_TEA, 10, 5),
  new Drug(drugTypes.FERVEX, 12, 35),
  new Drug(drugTypes.MAGIC_PILL, 15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);

/* eslint-enable no-console */
