import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div>
      <h1>Piedra, papel, tijera, lagarto, Spock</h1>
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
      <div>
        <Link to="/">Volver a inicio </Link>
        <Link to="/sheldonRules">O deja que Sheldon te lo explique </Link>
      </div>
    </div>
  );
};

export default Rules;
