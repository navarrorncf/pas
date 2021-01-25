import React, { useState } from "react";

import { Majors } from "../majors/majors.component";

import "./options.styles.scss";

export const Options = () => {
  const [ep, setEP] = useState(true);
  const [ppi, setPPI] = useState(false);
  const [pcd, setPCD] = useState(false);
  const [br, setBR] = useState(false);
  const [l1, setL1] = useState("li");
  const [l2, setL2] = useState("li");
  const [l3, setL3] = useState("li");
  const [eb1, setEB1] = useState(0);
  const [eb2, setEB2] = useState(0);
  const [eb3, setEB3] = useState(0);
  const [el1, setEL1] = useState(0);
  const [el2, setEL2] = useState(0);
  const [el3, setEL3] = useState(0);
  const [red1, setRED1] = useState(0);
  const [red2, setRED2] = useState(0);
  const [red3, setRED3] = useState(0);
  const [campus, setCampus] = useState("ppil");

  const handleEP = () => {
    setEP(!ep);
  };

  const handlePPI = () => {
    setPPI(!ppi);
  };

  const handlePCD = () => {
    if (!pcd) {
      setEP(true);
    }
    setPCD(!pcd);
  };

  const handleBR = () => {
    if (!br) {
      setEP(true);
    }
    setBR(!br);
  };

  const handleL1 = (e) => {
    setL1(e.target.value);
  };

  const handleL2 = (e) => {
    setL2(e.target.value);
  };

  const handleL3 = (e) => {
    setL3(e.target.value);
  };

  const handleEB1 = (e) => {
    setEB1(e.target.value);
  };

  const handleEB2 = (e) => {
    setEB2(e.target.value);
  };

  const handleEB3 = (e) => {
    setEB3(e.target.value);
  };

  const handleEL1 = (e) => {
    setEL1(e.target.value);
  };

  const handleEL2 = (e) => {
    setEL2(e.target.value);
  };

  const handleEL3 = (e) => {
    setEL3(e.target.value);
  };

  const handleRED1 = (e) => {
    setRED1(e.target.value);
  };

  const handleRED2 = (e) => {
    setRED2(e.target.value);
  };

  const handleRED3 = (e) => {
    setRED3(e.target.value);
  };

  const handleCampus = (e) => {
    setCampus(e.target.value);
  };

  return (
    <main>
      <div className="quota-options">
        <h3>Cotas</h3>
        <div className="quota-form">
          <div className="form-group">
            <label htmlFor="ep">Escola Pública</label>
            <input
              type="checkbox"
              name="ep"
              id="ep"
              onChange={handleEP}
              checked={ep}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ppi">PPI</label>
            <input
              type="checkbox"
              name="ppi"
              id="ppi"
              onChange={handlePPI}
              checked={ppi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="br">Baixa Renda</label>
            <input
              type="checkbox"
              name="br"
              id="br"
              onChange={handleBR}
              checked={br}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pcd">PCD</label>
            <input
              type="checkbox"
              name="pcd"
              id="pcd"
              onChange={handlePCD}
              checked={pcd}
            />
          </div>
        </div>
      </div>
      <div className="score-options">
        <h2>Escore</h2>
        <div>
          <div className="1ano">
            <h3>1º ANO</h3>
            <div className="score-form score-1">
              <div className="form-group">
                <label htmlFor="eb1">Escore Bruto</label>
                <input
                  type="number"
                  name="eb1"
                  id="eb1"
                  value={eb1 === 0 ? "" : eb1}
                  onChange={handleEB1}
                />
              </div>
              <div className="form-group">
                <label>Idioma</label>
                <div className="radio" value={l1} onChange={handleL1}>
                  <div>
                    <input
                      type="radio"
                      name="l1"
                      id="l1i"
                      value="li"
                      defaultChecked
                    />
                    <label htmlFor="l1i">Inglês</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="l1"
                      id="l1e"
                      value="le"
                      // defaultChecked={l1 === "l1e"}
                    />
                    <label htmlFor="l1e">Espanhol</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="l1"
                      id="l1f"
                      value="lf"
                      // defaultChecked={l1 === "l1f"}
                    />
                    <label htmlFor="l1f">Francês</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="el1">Escore P1</label>
                <input
                  type="number"
                  name="el1"
                  id="el1"
                  value={el1 === 0 ? "" : el1}
                  onChange={handleEL1}
                />
              </div>
              <div className="form-group">
                <label htmlFor="red1">Redação</label>
                <input
                  type="number"
                  name="red1"
                  id="red1"
                  value={red1 === 0 ? "" : red1}
                  onChange={handleRED1}
                />
              </div>
            </div>
          </div>
          <div className="2ano">
            <h3>2º ANO</h3>
            <div className="score-form score-2">
              <div className="form-group">
                <label htmlFor="eb2">Escore Bruto</label>
                <input
                  type="number"
                  name="eb2"
                  id="eb2"
                  value={eb2 === 0 ? "" : eb2}
                  onChange={handleEB2}
                />
              </div>
              <div className="form-group">
                <label>Idioma</label>
                <div className="radio" value={l2} onChange={handleL2}>
                  <div>
                    <input
                      type="radio"
                      name="l2"
                      id="l2i"
                      value="li"
                      defaultChecked
                    />
                    <label htmlFor="l2i">Inglês</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="l2"
                      id="l2e"
                      value="le"
                      // defaultChecked={l2 === "l2e"}
                    />
                    <label htmlFor="l2e">Espanhol</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="l2"
                      id="l2f"
                      value="lf"
                      // defaultChecked={l2 === "l2f"}
                    />
                    <label htmlFor="l2f">Francês</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="el2">Escore P1</label>
                <input
                  type="number"
                  name="el2"
                  id="el2"
                  value={el2 === 0 ? "" : el2}
                  onChange={handleEL2}
                />
              </div>
              <div className="form-group">
                <label htmlFor="red2">Redação</label>
                <input
                  type="number"
                  name="red2"
                  id="red2"
                  value={red2 === 0 ? "" : red2}
                  onChange={handleRED2}
                />
              </div>
            </div>
          </div>
          <div className="3ano">
            <h3>3º ANO</h3>
            <div className="score-form score-3">
              <div className="form-group">
                <label htmlFor="eb3">Escore Bruto</label>
                <input
                  type="number"
                  name="eb3"
                  id="eb3"
                  value={eb3 === 0 ? "" : eb3}
                  onChange={handleEB3}
                />
              </div>
              <div className="form-group">
                <label>Idioma</label>
                <div className="radio" value={l3} onChange={handleL3}>
                  <div>
                    <input
                      type="radio"
                      name="l3"
                      id="l3i"
                      value="li"
                      defaultChecked
                    />
                    <label htmlFor="l3i">Inglês</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="l3"
                      id="l3e"
                      value="le"
                      // defaultChecked={l3 === "l3e"}
                    />
                    <label htmlFor="l3e">Espanhol</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="l3"
                      id="l3f"
                      value="lf"
                      // defaultChecked={l3 === "l3f"}
                    />
                    <label htmlFor="l3f">Francês</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="el3">Escore P1</label>
                <input
                  type="number"
                  name="el3"
                  id="el3"
                  value={el3 === 0 ? "" : el3}
                  onChange={handleEL3}
                />
              </div>
              <div className="form-group">
                <label htmlFor="red3">Redação</label>
                <input
                  type="number"
                  name="red3"
                  id="red3"
                  value={red3 === 0 ? "" : red3}
                  onChange={handleRED3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="campus-option">
        <h2>Campus</h2>
        <div className="radio" onChange={handleCampus} value={campus}>
          <div className="form-group">
            <input
              type="radio"
              name="campus"
              id="ceil"
              value="ceil"
              // checked={campus === "ceil"}
            />
            <label htmlFor="ceil">Ceilândia</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="campus"
              id="ppil"
              value="ppil"
              defaultChecked
            />
            <label htmlFor="ppil">Plano Piloto</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="campus"
              id="gama"
              value="gama"
              // checked={campus === "gama"}
            />
            <label htmlFor="gama">Gama</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="campus"
              id="plan"
              value="plan"
              // checked={campus === "plan"}
            />
            <label htmlFor="plan">Planaltina</label>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <h3>
          <span>Atenção</span>
        </h3>
        <p>
          As estimativas aqui calculadas se baseiam no nos argumentos máximos e
          mínimos do subprograma 2016-2018 do PAS, disponibilizados no site do{" "}
          <a href="https://www.cebraspe.org.br/pas/subprogramas/2016_2018/3">
            cebraspe
          </a>
          . Os parâmetros que influenciam no cálculo dos argumentos de cada
          estudante são gerados anualmente para cada etapa de cada do
          subprograma com base nos resultados de todos os participantes do
          exame.
        </p>
        <p>
          Lembramos que as provas da terceira etapa do triênio 2018-2020 ainda
          não foram realizadas e que, portanto, todos os dados e estimativas
          referentes à essa etapa provavelmente serão diferentes dos utilizados
          aqui.
        </p>
        <p>
          Ressaltamos ainda que os argumentos máximos e mínimos para cada curso
          dependem, além dos argumentos dos concorrentes, da demanda para o
          curso em questão, que varia de etapa para etapa.
        </p>
      </div>
      <Majors
        data={[1, 2, 3, 4, 5]}
        options={{ ep, ppi, br, pcd }}
        campus={campus}
        score={{
          ano1: [eb1, l1, el1, red1],
          ano2: [eb2, l2, el2, red2],
          ano3: [eb3, l3, el3, red3],
        }}
      />
    </main>
  );
};
