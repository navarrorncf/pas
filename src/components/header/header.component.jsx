import React from "react";

import "./header.styles.scss";

import logo from "../../assets/images/logo128.png";
import pas from "../../assets/images/pas.png";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo do Centro de Ensino Médio 02 de Brazlândia" />
      </div>
      <h1>Simulador &mdash; PAS</h1>
      <div className="logo-container">
        <img src={pas} alt="logo do Centro de Ensino Médio 02 de Brazlândia" />
      </div>
    </header>
  );
};
