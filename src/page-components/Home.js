import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <div>
        <p>Elige el modo de juego</p>
        <Link to="/game?singlePlayer=true">Un jugador</Link>
        <Link to="/game?singlePlayer=false">Dos jugadores</Link>
      </div>
      <div>
        <Link to="/rules">¿No conoces las reglas?</Link>
      </div>
    </div>
  );
};

export default Home;
