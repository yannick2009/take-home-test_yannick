import fs from "fs";
import { drugTypes, ERROR_MSG, OUTPUT_FILE, SUCCESS_MSG } from "./constants";
import { Drug, Pharmacy } from "./pharmacy";

const pharmacy = new Pharmacy();
pharmacy.addDrug(new Drug(drugTypes.DOLIPRANE, 20, 30));
pharmacy.addDrug(new Drug(drugTypes.HERBAL_TEA, 10, 5));
pharmacy.addDrug(new Drug(drugTypes.FERVEX, 12, 35));
pharmacy.addDrug(new Drug(drugTypes.MAGIC_PILL, 15, 40));

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  OUTPUT_FILE,
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log(ERROR_MSG);
    } else {
      console.log(SUCCESS_MSG);
    }
  },
);

/* eslint-enable no-console */
