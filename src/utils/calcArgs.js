const medDesv = require("./med_desv");
const xFactor = 0.806;

const calcAPP = (EBP, MAEBP, DPEBP) => {
  return (10 * (EBP - MAEBP)) / DPEBP;
};

const calcArgEtapa = (anoArr, ano) => {
  let [eb, lem, el, red] = anoArr;
  let EBP1 = el * xFactor;

  if (ano === "1" && EBP1 < 0) {
    EBP1 = 0;
  }

  let EBP2 = eb - EBP1;

  let MD = medDesv[ano];

  let APP1 = calcAPP(EBP1, MD[lem][0], MD[lem][1]);
  let APP2 = calcAPP(EBP2, MD.p2[0], MD.p2[1]);
  let APPR = calcAPP(red, MD.red[0], MD.red[1]);

  return 0.072 * APP1 + 0.828 * APP2 + APPR * 0.1;
};

const calcArgs = (score) => {
  const { ano1, ano2, ano3 } = score;

  let AP1 = calcArgEtapa(ano1, "1");
  let AP2 = calcArgEtapa(ano2, "2");
  let AP3 = calcArgEtapa(ano3, "3");

  return [AP1, AP2, AP3];
};

module.exports = calcArgs;
