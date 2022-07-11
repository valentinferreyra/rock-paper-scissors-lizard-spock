import React from "react";
import { Link } from "react-router-dom";
import rules from "../img/rules.png";

const Rules = () => {
  return (
    <div className="home-container">
      <div className="home-container__rules">
        <h1 className="home-container__rules-title">
          Piedra, papel, tijera, lagarto, Spock
        </h1>
        <div className="home-container__rules-description">
          <img src={rules} alt="rules" />
          <div className="home-container__rules-description-text">
            <p>Las reglas son simples...</p>
            <p>Tijera corta a Papel </p>
            <p>Papel tapa a Piedra </p>
            <p>Piedra aplasta a Lagarto</p>
            <p>Lagarto envenena a Spock </p>
            <p>Spock rompe a Tijera </p>
            <p>Tijera decapita a Lagarto</p>
            <p>Lagarto devora a Papel </p>
            <p>Papel desautoriza a Spock </p>
            <p>Spock vaporiza a Piedra</p>
            <p>y como siempre, Piedra aplasta a Tijera</p>
          </div>
        </div>
      </div>
      <div className="home-container__buttons">
        <Link to="/">Volver a inicio </Link>
        <Link to="/sheldonRules">O deja que Sheldon te lo explique </Link>
      </div>
    </div>
  );
};

export default Rules;
