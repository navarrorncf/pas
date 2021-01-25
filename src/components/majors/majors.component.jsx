import React from "react";

import "./majors.styles.scss";

import calcArgs from "../../utils/calcArgs";
import validateArr from "../../utils/validateArr";
import calcCSS from "../../utils/calcCSS";

import jsonData from "../../dev-data/output.json";

export const Majors = ({ data, options, campus, score }) => {
  const majors = jsonData;
  const campi = {
    ppil: "Plano Piloto",
    plan: "Planaltina",
    ceil: "Ceilândia",
    gama: "Gama",
  };

  let quota = "";

  if (options.ep) {
    quota += "e";
  }
  if (options.br) {
    quota += "r";
  }
  if (options.ppi) {
    quota += "p";
  }
  if (options.pcd) {
    quota += "d";
  }

  if (quota === "p") {
    quota = "neg";
  }

  if (quota === "") {
    quota = "uni";
  }

  const byQuota = majors.map((major) => {
    const [quotaMin, quotaMax] = [quota + "min", quota + "max"];
    const { campus, turno, curso, sem } = major;

    return {
      campus,
      turno,
      curso,
      min: major[quotaMin],
      max: major[quotaMax],
      sem,
      key: JSON.stringify(major),
    };
  });

  const filtered = byQuota.filter((major) =>
    new RegExp(campi[campus]).test(major.campus)
  );

  let AP1, AP2, AP3, APF;

  if (
    validateArr(score.ano1) &&
    validateArr(score.ano2) &&
    validateArr(score.ano3)
  ) {
    [AP1, AP2, AP3] = calcArgs(score);
    APF = AP1 + 2 * AP2 + 3 * AP3;
  }

  return (
    <div className="majors">
      <div className="report">
        {APF + 118.80370342120834 < 0.01 ? (
          <h3 className="danger"> Você preencheu seu escore?</h3>
        ) : (
          ""
        )}
        <h2>Argumento</h2>
        <div className="args">
          <div className="arg-parcial">
            <div>
              <h3>Etapa 1</h3>
              <p>{AP1.toFixed(3)}</p>
            </div>
            <div>
              <h3>Etapa 2</h3>
              <p>{AP2.toFixed(3)}</p>
            </div>
            <div>
              <h3>Etapa 3</h3>
              <p>{AP3.toFixed(3)}</p>
            </div>
          </div>
          <div className="arg-final">
            <h3>Argumento Final Estimado</h3>
            <p>{APF.toFixed(3)}</p>
          </div>
        </div>
      </div>
      <h2>Cursos</h2>
      <div className="majors-list">
        <div className="headers">
          <div className="header long">Campus</div>
          <div className="header medium">Turno</div>
          <div className="header long">Curso</div>
          <div className="header short">Mín</div>
          <div className="header short">Máx</div>
          <div className="header short">Semestre</div>
        </div>
        {filtered.map((major) => (
          <div key={major.key} className={`row ${calcCSS(APF, major.min)}`}>
            <div className="long">{major.campus}</div>
            <div className="medium">{major.turno}</div>
            <div className="long">{major.curso}</div>
            <div className="short">{major.min}</div>
            <div className="short">{major.max}</div>
            <div className="short">{major.sem}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
